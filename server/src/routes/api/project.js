import express from 'express';
import projectsController from '#src/controllers/projectsController'
const router = express.Router();


router.get('/',projectsController.allProjects);
router.post('/',projectsController.createProject);

export default router;