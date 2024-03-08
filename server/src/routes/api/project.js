import express from 'express';
import projectsController from '#src/controllers/projectsController'
import RBAC from '#src/middleware/rbac'
import authGard from '#src/middleware/authGard'
const router = express.Router();


router.get('/',projectsController.allProjects);
router.post('/',[authGard.protect,RBAC.authorizationChecker],projectsController.createProject);
router.put('/:id',[authGard.protect,RBAC.authorizationChecker],projectsController.updateProject);
router.get('/:id',[authGard.protect,RBAC.authorizationChecker],projectsController.oneProject);
router.patch('/:id',[authGard.protect,RBAC.authorizationChecker],projectsController.patchProject);

export default router;