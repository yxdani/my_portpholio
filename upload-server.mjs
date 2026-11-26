import express from 'express';
import multer from 'multer';
import path from 'node:path';
import fs from 'node:fs';

const app = express();
const PORT = 3001;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(process.cwd(), 'public', 'files');
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

app.post('/api/upload', upload.array('files'), (req, res) => {
  res.json({ ok: true, count: req.files.length });
});

app.listen(PORT, () => {
  console.log('✅ Upload server: http://localhost:' + PORT + '/api/upload');
});