import mongoose from "mongoose";
import { registerSchema } from "swaggiffy";

const Schema = mongoose.Schema({
    chasisNumber: {
        type: String,
        required: true,
        unique: true,
        maxLength: 20,
    },
    manufacturer: {
        type: String,
        required: true,
        maxLength: 60,
    },
    manufactureYear: {
        type: Number,
        required: true,
        maxLength: 4,
    },
    model: {
        type: String,
        required: true,
        maxLength: 60,
    },
    price: {
        type: Number,
        required: true,
        maxLength: 10,
    },
    color: {
        type: String,
        default: "white",
        maxLength: 60,
    },
    plateNumber: {
        type: String,
        required: true,
        unique: true,
        maxLength: 8,
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Owner",
        required: false,
    }

}, {
    timestamps: true
});

registerSchema('Vehicle', Schema, { orm: 'mongoose' });
//create mongoose virtual ref for owner
Schema.virtual("owner", {
    ref: "Owner",
    localField: "ownerId",
    foreignField: "_id",
    justOne: true
});

const Vehicle = mongoose.model("Vehicle", Schema);
export default Vehicle;