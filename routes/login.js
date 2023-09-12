import express from 'express';

const router = express.Router();

// get login page
router.get('/', (req, res) => {

  const title = 'Login';
  res.render('login', { title});
});

export { router } ;