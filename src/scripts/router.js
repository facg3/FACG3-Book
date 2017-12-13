const handlers = require('./handler.js');

const router = (req, res) => {
  const endpoint = req.url.split('/')[1];
  if (endpoint === '') {
    handlers.HomePage(req, res);
  } else if (endpoint === 'public') {
    handlers.generic(req, res);
  } else if (endpoint === 'home') {
    handlers.getPosts(req, res);
  } else if (endpoint === 'post_publisher') {
    handlers.addPosts(req, res);
  }
};
module.exports = router;
