import Owners from '../database/models/owner.model';
import Joi from 'joi';

//create Owner
export const registerOwner = async (req, res) => {
    const { error } = validateOwner(req.body);
    if (error) return res.status(400).send({
        success: false,
        message: error.details[0].message
    });

    const owner = new Owners({
        names: req.body.names,
        phone: req.body.phone,
        nationalId: req.body.nationalId,
        address: req.body.address,
    });
    try {
        await owner.save();
        res.send({ success: true, message: 'Owner created successfully', data: owner });
    }
    catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }

}

export const getAllOwners = async (req, res) => {
    const owners = await Owners.find();
    return res.status(200).json({ success: true, data: owners });
}

export const getOwnerById = async (req, res) => {
    const uowner = await Owners.findOne({ _id: req.params.id });
    if (!uowner) return res.status(400).json({ success: false, message: "Owner does not exist" });
    return res.status(200).json({ success: true, data: uowner });
}

export const getOwnerByEmail = async (req, res) => {
    const uowner = await Owners.findOne({ email: req.params.email });
    if (!uowner) return res.status(400).json({ success: false, message: "Owner does not exist" });
    return res.status(200).json({ success: true, data: uowner });
}

export const updateOwner = async (req, res) => {
    const uowner = await Owners.findOne({ _id: req.params.id });
    if (!uowner) return res.status(400).json({ success: false, message: "Owner does not exist" });
    const newOwner = await Owners.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    return res.status(200).json({ success: true, data: newOwner });
}

export const deleteOwner = async (req, res) => {
    const owner = await Owners.findOne({ _id: req.params.id });
    if (!owner) return res.status(400).json({ success: false, message: "Owner does not exist" });

    await Owners.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({ success: true, data: owner });
}

//validate Owner
function validateOwner(owner) {
    const schema = Joi.object({
        names: Joi.string().min(3).max(50).required(),
        phone: Joi.string().min(10).max(12).required(),
        nationalId: Joi.string().min(16).max(16).required(),
        address: Joi.string().min(3).max(50).required(),
    });
    return schema.validate(owner);
}