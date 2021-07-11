const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'created_at',
            'contents'
        ]
    }).then(postData => {
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('home', {
            posts,
            loggedIn: req.session.loggedIn
          });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'created_at',
            'post_content'
        ]
    }).then(postData => {
        if (!postData) {
          res.status(404).json({ message: 'Post not found' });
          return;
        }
    });
});

module.exports = router;