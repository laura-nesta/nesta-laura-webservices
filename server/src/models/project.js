import mongoose, { now } from 'mongoose';
const { Schema } = mongoose;


const projectSchema = new Schema({
    name : {type:String, required:'nom de projet obligatoire', unique:true},
    competences: [Schema.Types.Mixed],
    users:[Schema.Types.Mixed]
    },
    { timestamps: true }
);

const creationModel = mongoose.model('project',projectSchema)

export default creationModel