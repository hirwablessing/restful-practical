import Admin from '../database/models/admin.model';
import { hashPassword, comparePassword } from '../utils/hash-password';
import { sign } from 'jsonwebtoken';
import Joi from 'joi';

export const signup = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const { names, email, phone, nationalId, password } = req.body;

    const userExist = await Admin.findOne({ email });
    if (userExist) return res.status(400).json({ success: false, message: "Email and NID must be unique" });

    const hashedPassword = await hashPassword(password);

    try {
        const user = new Admin({ names, email, password: hashedPassword, phone, nationalId });
        await user.save()
        return res.status(201).json({ success: true, message: "User created successfully", data: user });

    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }

}

export const signin = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await Admin.findOne({ email });
        if (!user) return res.status(400).json({ success: false, message: "Invalid Credentials" });

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) return res.status(400).json({ success: false, message: "Invalid Credentials" });

        const token = sign({ _id: user._id, email, name: user.name }, process.env.JWT_KEY, { expiresIn: '1d' });
        return res.status(200).json({ success: true, message: "User logged in successfully", data: { token, user } });

    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
}

export const getProfile = async (req, res) => {
    return res.status(200).json({ success: true, data: req.user });
}

function validateUser(user) {
    const schema = Joi.object({
        names: Joi.string().max(255).min(3).required(),
        phone: Joi.string().max(12).min(10).required(),
        email: Joi.string().max(255).min(3).required().email(),
        password: Joi.string().max(255).min(6).required(),
        nationalId: Joi.string().max(16).min(16).required(),
    });

    return schema.validate(user);
}