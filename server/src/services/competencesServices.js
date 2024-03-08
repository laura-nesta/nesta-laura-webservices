import Competence  from "#src/models/competences";
import bcrypt from "bcryptjs"

const exposeServices = {

    findOneCompetenceById:async ({id})=>{
        try {
            const   findCompetence = await Competence.findOne({_id:id})
            return  findCompetence
        } catch (error) {
            throw error
        }
    },
    findAllCompetences: async ()=>{
        try {
            const   allCompetences = await Competence.find()
            return  allCompetences
        } catch (error) {
            throw error
        }
    },
    createCompetence: async (rawData)=>{
        try {
            const   toSave  = new Competence(rawData)
            const   newCompetence = toSave.save()   
            return  newCompetence
        } catch (error) {
            throw error
        }
    },

}



export default exposeServices