import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { type: String, unique: true, required: true },
    password: { type: String },
    oauthProvider: { type: String },
    oauthId: { type: String },
    communities: [
        {
            communityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Community' },
            role: { type: String, enum: ['admin', 'associate', 'member'] }
        }
    ],
    publicKey: { type: String },
    createdAt: { type: Date, default: Date.now }

});

export const User = mongoose.model('User', userSchema);