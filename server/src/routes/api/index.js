import express from 'express';
import auth from './auth.js';
import users from './users.js';
import competences from './competence.js';
import projects from './project.js';
import roles from './roles.js';

const router = express.Router();

// api/
router.get('/', (req, res) => {
  res.json({
    message: 'API/',
  });
});

router.use('/auth', auth);
router.use('/users', users);
router.use('/competences', competences);
router.use('/projects', projects);
router.use('/roles', roles);


export default router;
