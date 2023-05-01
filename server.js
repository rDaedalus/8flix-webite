import express from 'express';
import path from 'path';

const app = express();
const port = 8000;

// Set the public directory as static
const publicDirectoryPath = path.join(new URL(import.meta.url).pathname, 'public');
app.use(express.static(publicDirectoryPath));

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});