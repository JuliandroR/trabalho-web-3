import { Router } from "express";
import { getImages, processData } from "../controllers/albumController";
import { addUser } from "../controllers/userController";
import { autenticate } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";
import multer from "../middleware/multerMiddleware";

const router = Router();

router.post("/auth", autenticate);
router.post("/user", addUser);
router.post("/form", multer.single("photo"), processData);
router.use(protect);
router.get("/images", getImages);

export default router;
