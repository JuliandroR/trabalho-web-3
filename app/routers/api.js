import { Router } from 'express';
import multer from 'multer'
import { getImages, processData } from '../controllers/AlbumController';
import { mkdirSync } from 'fs'
import { addUser } from '../controllers/UserController'
import { autenticate } from '../controllers/AuthController'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = 'images'
        mkdirSync(path, { recursive: true })
        cb(null, path);
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });
const router = Router();

router.post('/user', addUser)
router.post('/auth', autenticate)
router.post('/form', upload.single('photo'), processData)
router.get('/images', getImages)

export default router;
