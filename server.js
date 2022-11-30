const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const formRouter = require('./routes/formRouter.js');
const app = express();

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.enable('trust proxy');
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(mongoSanitize());
app.use(xss());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

app.use('/api/contact', formRouter);

app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = 5000;
app.listen(PORT);

// const mongoose = require('mongoose');
// const app = require('./app');

// process.on('uncaughtException', (err) => {
//   console.log('UNCAUGHT EXCEPTION! 💣 Shutting down...');
//   console.log(err.name, err.message);
//   process.exit(1);
// });

// const DB = process.env.DATABASE;

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('DB connection successful!'));

// const port = 5000;
// const server = app.listen(port, () => {
//   console.log(`App running on port ${port}`);
// });

// process.on('unhandledRejection', (err) => {
//   console.log('UNHANDLER REJECTION! 💣 Shutting down...');
//   console.log(err.name, err.message);

//   server.close(() => {
//     process.exit(1);
//   });
// });
