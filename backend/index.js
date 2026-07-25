// Entry point for Render deployment
const app = require('./src/app');

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});
