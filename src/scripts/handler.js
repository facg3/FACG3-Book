const fs = require('fs');
const path = require('path');
const data = require('../db/queries/db_functions');

const queryString = require('querystring');

const HomePage = (request, response) => {
  fs.readFile(path.join(__dirname, '..', '..', 'public', 'index.html'), (error, file) => {
    if (error) {
      response.writeHead(500, { 'content-Type': 'text/html' });
      response.end('<h1> Internal server Error </h1>');
    } else {
      response.writeHead(200, { 'content-Type': 'text/html' });
      response.end(file);
    }
  });
};
const generic = (request, response) => {
  const endpoint = request.url;
  const extension = endpoint.split('.')[1];
  const fileType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    json: 'application/json',
  };
  fs.readFile(path.join(__dirname, '..', '..', endpoint), (error, file) => {
    if (error) {
      response.writeHead(500, 'content-Type:text/html');
      response.end('<h1> Internal server Error </h1>');
    } else {
      response.writeHead(200, `content-Type:${fileType[extension]}`);
      response.end(file);
    }
  });
};
const getPosts = (request, response) => {
  data.getPost((err, res) => {
    if (err) {
      response.writeHead(500, 'Content-Type:text/html');
      response.end('<h1>Sorry, there was a problem getting the users</h1>');
    } else {
      const output = JSON.stringify(res);
      response.writeHead(200, {
        'content-type': 'application/json',
      });
      response.end(output);
    }
  });
};
const addPosts = (request, response) => {
  let result = '';
  request.on('data', (chunk) => {
    result += chunk;
  });
  request.on('end', () => {
    const name = queryString.parse(result).name;
    const post = queryString.parse(result).post;
    data.addPost(name, post, (err, res) => {
      if (err) {
        response.writeHead(500, 'Content-Type:text/html');
        response.end('<h1>Sorry, there was a problem adding that user</h1>');
      } else {
        response.writeHead(302, {
          Location: 'public/wall.html',
          'Content-Type': 'text/html',
        });
        response.end();
      }
    });
  });
};
module.exports = {
  HomePage,
  generic,
  addPosts,
  getPosts,
};
