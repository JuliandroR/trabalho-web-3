const { Router } = require('express');
const form = require('./form')

const router = Router();

router.post('/form', form.processData)


module.exports = router;