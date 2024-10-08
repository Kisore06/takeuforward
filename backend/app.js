const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const testRouter= require('./src/routes/testRoutes');
const bannerRouter= require('./src/routes/bannerRoutes');

app.use('/api',testRouter)
app.use('/api',bannerRouter)


app.get('/', (req, res) => {
  res.send('Welcome to Take You Forward server!');
});

const port = process.env.PORT || 3801;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
