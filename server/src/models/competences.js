import mongoose from 'mongoose';
const { Schema } = mongoose;


const competenceSchema = new Schema({
    name : String, 
},
{ timestamps: true }
);

const competenceModel = mongoose.model('competence',competenceSchema)

export default competenceModel