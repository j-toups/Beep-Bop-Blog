const  Post  = require('../models/blogPosts');

const postData = [
  {
    title: 'So fun!',
    contents:'aint it?'
  },
  {
    title: 'Holy cows rain down',
    contents:'But make it animation'
  },
  {
    title: 'My dog thinks I am a good coder',
    contents:'He is not very smart though'
  },
];

const seedPosts = () => Post.bulkCreate(postData);


module.exports = seedPosts;