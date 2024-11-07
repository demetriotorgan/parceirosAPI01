const {Router} = require('express');
const { getCadastros, saveCadastros } = require('../controllers/cadastroControler');

const router = Router();

router.get('/api/usuarios', getCadastros);
router.post('/api/usuarios', saveCadastros);

module.exports = router;