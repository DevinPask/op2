const router = require('express').Router();

router.get('/', (req, res) => {

  if (req.session.loggedIn) {
    console.log("\n\n HOMEPAGE: USER LOGGED IN! \n\n");
    res.redirect('/box-office-page');
  } else {
    console.log("\n\n HOMEPAGE: USER NOT LOGGED IN \n\n");
    res.render('homepage', {
      loggedIn: req.session.loggedIn
    });
  }
});

router.get('/quizpage', (req, res) => {
  res.render('quiz', {
    session: req.session
  });
});

router.get('/box-office-page', (req, res) => {
  res.render('box-office', {
    session: req.session
  });
});

router.get('/loginpage', (req, res) => {
  if (req.session.loggedIn) {
    console.log("\n\n LOGIN PAGE: USER LOGGED IN! \n\n");
    res.redirect('/quizpage');
    return;
  } else {
    console.log("\n\n LOGIN PAGE: USER NOT LOGGED IN \n\n");
  }

  res.render('login');
});

module.exports = router;