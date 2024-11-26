const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const { notFound, errorHandler} = require('./middlewares/errorHandler');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

connectDB();
app.use(express.json());

app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/tasks', require('./routes/taskRoutes'));

const __dirname1 = path.resolve();

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname1, '/client/build')));
  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname1, 'client', 'build', 'index.html'));
  });
} else{
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
}
app.use(notFound, errorHandler);
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});