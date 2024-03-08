import CompetencesService from '#src/services/competencesServices'


const exposeController = {

    allCompetences:async (req,res)=>{
        const allCompetences = await CompetencesService.findAllCompetences()
        return res.json(allCompetences)
    },
    createCompetence:async (req,res)=>{
        const {body}  = req
        try {
                const newCompetence= await CompetencesService.createCompetence(body)     
                return res.json(newCompetence)
            } catch (error) {
               return res.sendStatus(400)
        }
        
    }


}

export default exposeController