import mongoose from "mongoose";
import { registerSchema } from "swaggiffy";

const Schema = mongoose.Schema({
    names: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
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
    password: {
        type: String,

    }
});

registerSchema('Admin', Schema, { orm: 'mongoose' });
const Admin = mongoose.model("Admin", Schema);
export default Admin;