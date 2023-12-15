import { Schema, model, models } from "mongoose";

const exerciseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    skill: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    solution: {
        type: String,
      //  required: true
    },
    attachedFile: {
        type: String,
        required: true
    },
    progress: [{
        student_id:{
            type: String,
            required: false
        },
        answer: {
            type: String,
            required: false
        },
    }]
}, { timestamps: true });

export const Exercise = models?.Exercise || model('Exercise', exerciseSchema)