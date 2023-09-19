import express from 'express';
import menuRoutes from './routes/menuRoutes';

const app = express();
const PORT = 3005;

//Routes
app.use('/api/menu', menuRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
