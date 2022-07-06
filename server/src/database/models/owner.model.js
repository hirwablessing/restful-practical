import mongoose from "mongoose";
import { registerSchema } from "swaggiffy";

const Schema = mongoose.Schema({
    names: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    nationalId: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
});

registerSchema('CarOwner', Schema, { orm: 'mongoose' });

//create mongoose virtual ref for vehicle
Schema.virtual("vehicles", {
    ref: "Vehicle",
    localField: "_id",
    foreignField: "ownerId",
})

const Owner = mongoose.model("Owner", Schema);
export default Owner;