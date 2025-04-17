import mongoose from 'mongoose';

const jobShema = new mongoose.Schema({

    title: {
        type: String,
        required:true,
    },
    company: {
        type: String,
        required:true,
    },
    type: {
        type: String,
        required:true,
    },
    location: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required:true,
    },
    createdAt: {
        type: Date, default: Date.now
    }

})

export default mongoose.model('Job', jobShema);