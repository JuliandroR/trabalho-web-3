import { Router } from 'express';
import multer from 'multer'
import { getImages, processData } from '../controllers/AlbumController';
import { mkdirSync } from 'fs'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = 'images'
        mkdirSync(path, { recursive: true })
        cb(null, path);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });
const router = Router();

router.post('/form', upload.single('photo'), processData)
router.get('/images', getImages)


export default router;