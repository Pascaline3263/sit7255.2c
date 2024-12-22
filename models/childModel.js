import mongoose from 'mongoose';

const childSchema = new mongoose.Schema({
    childName: {
        type: String,
        required: true,
    },
    dailyAllowance: {
        type: String,
        required: true,
    },
    dailyUsage: {
        type: String,
        required: true,
    },
    valueOfScreenTime: {
        type: String,
        required: true,
    },
}, { timestamps: true });



const Child = mongoose.model("Child", childSchema);

export default Child;
