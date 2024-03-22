import express from "express";
import { getAllPosters, deletePoster, createPoster, updatePoster, getPosterById } from "../controllers/PosterController.js";
import {validateCreatePoster, validateDeletePoster, validatePutPosters} from "../validators/posterValidator.js"
const router = express.Router();
  
router.get("/posters", getAllPosters);
router.get("/posters/:id", getPosterById);
router.delete("/posters/:id",validateDeletePoster, deletePoster);
router.post("/posters", validateCreatePoster,createPoster);
router.put("/posters/:id",validatePutPosters, updatePoster);


export default router;