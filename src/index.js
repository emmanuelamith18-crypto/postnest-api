const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Import Routes
const postsRouter = require('./routes/posts.routes');

// Use Routes
app.use('/api/v1/posts', postsRouter);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to PostNest API');
});

// Start Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});