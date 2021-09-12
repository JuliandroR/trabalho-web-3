import { Router } from 'express';
import multer from 'multer'
import { processData } from './form';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });
const router = Router();

router.post('/form', upload.single('photo'), processData)


export default router;