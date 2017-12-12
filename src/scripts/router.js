const handlers = require('./handler.js');

const router = (req, res) => {
  console.log('Entered router');
  const endpoint = req.url.split('/')[1];
  if (endpoint === '') {
    console.log('in');
    handlers.HomePage(req, res);
    console.log('out');
  } else if (endpoint === 'public') {
    handlers.generic(req, res);
  } else if (endpoint === 'Home') {
    handlers.getPost(req, res);
  } else if (endpoint === 'Post_Publisher') {
    handlers.addPost(req, res);
  }
};
module.exports = router;
