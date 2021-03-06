import { model, Schema } from 'mongoose';

const LocationScheme = new Schema({
    name: String,
    pincode: Number
});

export default model('Location', LocationScheme);
