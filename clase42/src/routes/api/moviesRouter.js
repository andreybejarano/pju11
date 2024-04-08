const express = require('express');
const router = express.Router();

const moviesController = require('../../controllers/api/moviesController');


router.post('/', moviesController.create);
router.get('/', moviesController.list);
router.delete('/:id', moviesController.delete);

module.exports = router;