/**
 * @author JNC
 * @version 1.0.0
 * 
 * Rutas de Usuarios
 * Este archivo define las rutas para gestionar los usuarios en la app de conteo de calorías
 */

const { Router } = require('express');
const router = Router();

const {
    AddUsers,
    ShowUsers,
    ShowUser,
    EditUsers,
    DeleteUsers,
    Login
} = require('../controllers/users.controller');

const { validateJWT } = require('../middlewares/jwt');


router.post('/', AddUsers); 

router.post('/login', Login);

router.use(validateJWT);


router.get('/', ShowUsers);
router.get('/:id', ShowUser);
router.put('/:id', EditUsers);
router.delete('/:id', DeleteUsers);

module.exports = router;
