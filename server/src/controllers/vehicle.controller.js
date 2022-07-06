import Vehicle from '../database/models/vehicle.model';
import Admin from '../database/models/admin.model';
import Joi from 'joi';

export const registerVehicle = async (req, res) => {
    const { error } = validateVehicle(req.body);
    if (error) return res.status(400).send({
        success: false,
        message: error.details[0].message
    });

    //validate plateNumber to be of format RA-X-NNN-X

    


    const {
        chasisNumber,
        manufacturer,
        manufactureYear,
        model,
        price,
        color,
        plateNumber,
        ownerId
    } = req.body;

    //check if owner exists
    const owner = await Admin.findById(ownerId);
    if (!owner) return res.status(400).send({
        success: false,
        message: "Owner does not exist"
    });

    const vehicle = new Vehicle({
        chasisNumber,
        manufacturer,
        manufactureYear,
        model,
        price,
        color,
        plateNumber,
        ownerId
    });
    try {
        await vehicle.save();
        return res.status(201).json({ success: true, data: vehicle });
    } catch (error) {
        return res.status(400).send({
            success: false,
            message: error.message
        });
    }

}

export const getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        return res.status(200).json({ success: true, data: vehicles });
    } catch (error) {
        return res.status(400).send({
            success: false,
            message: error.message
        });
    }
}


export const getVehicleById = async (req, res) => {
    const vehicle = await Vehicle.fin({ _id: req.params.id });
    if (!vehicle) return res.status(404).json({ success: false, message: "Vehicle does not exist" });
    return res.status(200).json({ success: true, data: vehicle });
}

export const getVehiclesByOwnerId = async (req, res) => {
    //find all vehicles by ownerId
    const vehicles = await Vehicle.find({ ownerId: req.params.id });
    if (!vehicles) return res.status(404).json({ success: false, message: "Vehicles does not exist" });
    return res.status(200).json({ success: true, data: vehicles });
}

export const updateVehicle = async (req, res) => {
    const vehicle = await Vehicle.findOne({ _id: req.params.id });
    if (!vehicle) return res.status(404).json({ success: false, message: "Vehicle does not exist" });

    const updated = await Vehicle.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    return res.status(200).json({ success: true, data: updated });
}

export const deleteVehicle = async (req, res) => {
    const vehicle = await Vehicle.findOne({ _id: req.params.id });
    if (!vehicle) return res.status(404).json({ success: false, message: "Vehicle does not exist" });
    await Vehicle.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({ success: true, data: vehicle });
}


function validateVehicle(vh) {
    const schema = Joi.object({
        chasisNumber: Joi.string().min(4).max(30).required(),
        manufacturer: Joi.string().min(4).max(30).required(),
        manufactureYear: Joi.number().min(1900).max(2020).required(),
        model: Joi.string().min(4).max(30).required(),
        price: Joi.number().min(1).max(1000000000).required(),
        color: Joi.string().min(4).max(30),
        plateNumber: Joi.string().min(4).max(7).required(),
        ownerId: Joi.string().min(4).max(30),
    })

    return schema.validate(vh);
}