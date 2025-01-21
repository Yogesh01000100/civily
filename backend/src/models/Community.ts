import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    roles: { type: [String], default: ['admin', 'associate', 'member'] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

export const Community = mongoose.model('Community', communitySchema);