// const express = require('express');
// const morgan = require('morgan');
// const helmet = require('helmet');
// const mongoSanitize = require('express-mongo-sanitize');
// const xss = require('xss-clean');
// const cors = require('cors');
// const path = require('path');
// const mongoose = require('mongoose');

// const formRouter = require('./routes/formRouter.js');
// const app = express();

// require('dotenv').config({ path: '.env' });

// const DB = process.env.DATABASE;
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('DB connection successful!'));

// app.enable('trust proxy');
// app.use(helmet());
// app.use(cors());
// app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.json({ limit: '10kb' }));
// app.use(express.urlencoded({ extended: true, limit: '10kb' }));
// app.use(mongoSanitize());
// app.use(xss());

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   console.log('Hello middleware');

//   next();
// });

// app.use('/api/contact', formRouter);
// app.use(express.static(path.join(__dirname + '/build')));

// const PORT = 8000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// module.exports = app;
