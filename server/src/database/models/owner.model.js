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
const Owner = mongoose.model("Owner", Schema);
export default Owner;