const asyncWrapper = require('../util/asyncWrapper');

const router = require('express').Router();

router.get('/', (req, res) => res.redirect('/products'));

router.get('/about', asyncWrapper(async (req, res) => {
    res.render('about', { title: 'About page' })
}))

router.all('*', (req, res) => {
    res.render('404', { title: 'Not Found' })
})

module.exports = router;