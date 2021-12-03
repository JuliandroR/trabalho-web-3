import { createHash } from "crypto";
import multer from "multer";
import { mkdirSync } from "fs";
import { extension } from "mime-types";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = "images";
    mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename: (req, file, cb) => {
    let filename = createHash("sha256").update(Date.now().toString()).digest("hex");

    filename += '.' + extension(file.mimetype);
    console.log(filename);
    cb(null, filename);
  },
});

export default multer({ storage });
