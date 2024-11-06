const {Router} = require('express');
const { getCadastros, saveCadastros } = require('../controllers/cadastroControler');

const router = Router();

router.get('/', getCadastros);
router.post('/save', saveCadastros);

module.exports = router;