import express from 'express';
import path from 'path';
import colors from 'colors';
import dotenv from 'dotenv';
import session from 'express-session';
import { fileURLToPath } from 'url'
import { router as frontRouter } from './routes/index.js';
import { router as loginRouter } from './routes/login.js';
import { router as registerRouter } from './routes/register.js';
import { router as deleteRouter } from './routes/delete.js';
import { router as updateRouter } from './routes/update.js';
import { router as gameRouter } from './routes/game.js';
import { router as itemsRouter } from './routes/items.js';
import { router as moviesRouter } from './routes/movies.js';
import { router as deleteCartRouter } from './routes/deleteFromCart.js';

const app = express();
dotenv.config();

// for body parser
app.use(express.urlencoded({ extended: false }));

// views and static paths
const viewsPath = path.join(fileURLToPath(new URL('.', import.meta.url)), '/views' );
const staticPath = path.join(fileURLToPath(new URL('.', import.meta.url)), '/public' );

// serve static files
app.use(express.static(staticPath));

// template engine
app.set('views', viewsPath);
app.set('view engine', 'ejs');

// session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

// routers
app.use('/', frontRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/delete', deleteRouter);
app.use('/update', updateRouter);
app.use('/game', gameRouter);
app.use('/items', itemsRouter);
app.use('/movies', moviesRouter);
app.use('/deleteFromCart', deleteCartRouter);

// errors: page not found
app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

// error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message || 'Something went wrong',
        error: app.get('env') === 'development' ? err : {},
    });
});

// start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`.green.bold);
});

export default app;
