const router = require("express").Router();
const moviesController = require("../../controllers/moviesController");

router.route("/:user")
  .get(moviesController.findAll)
  .post(moviesController.addMovie)
  .put(moviesController.updateMovie);
  
module.exports = router;