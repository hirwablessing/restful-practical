import Owners from '../database/models/owner.model';

export const getAllOwners = async (req, res) => {
    const uowners = await Owners.find();
    return res.status(200).json({ success: true, data: uowners });
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