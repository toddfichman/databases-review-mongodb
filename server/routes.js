const router = require('express').Router();
const controller = require('./controller.js');


router.route('/todolist') // '/todolist' is added to each of the requests below
.get(controller.fetch)
.post(controller.post)
.delete(controller.delete);

module.exports = router;