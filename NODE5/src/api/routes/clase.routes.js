const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send('este es mi get de clase'));
router.post('/', (req, res) => res.send('este es mi post de clase'));
router.put('/', (req, res) => res.send('este es mi put de clase'));
router.delete('/', (req, res) => res.send('este es mi delete de clase'));

module.exports = router;