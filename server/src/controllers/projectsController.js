import projectsServices from  '#src/services/projectsService'

const exposeController = {

    allProjects:async (req,res)=>{
        const {query} = req
        const allProjects = await projectsServices.findAllProjects(query)
        return res.json(allProjects)
    },
    oneProject:async (req,res)=>{
        const {params:{id}} = req
        const oneProject = await projectsServices.findOneProject({id})
        if(!oneProject) return res.sendStatus(404)
        return res.json(oneProject)
    },
    createProject:async (req,res)=>{
        const {body}  = req
        try {
                const newProject = await projectsServices.createProjects(body)     
                return res.status(201).json(newProject)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
    },
    updateProject:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        try {
               
                const toUpdate = await projectsServices.updateProject({id,body})     
                
                return res.json(toUpdate)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    patchProject:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        try {
               
                const toPatch = await projectsServices.patchProject({id,body})     
                return res.json(toPatch)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    }


}

export default exposeController