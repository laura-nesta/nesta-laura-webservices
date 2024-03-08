import express from 'express';
import competencesController from '#src/controllers/competencesController'
const router = express.Router();


router.get('/',competencesController.allCompetences);

router.post('/',competencesController.createCompetence);

export default router;