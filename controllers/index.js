const router = require('express').Router();

const homeRoutes = require('./home_routes.js');
const dashRoutes = require('./dashboard_routes.js');
const apiRoutes = require('./api/index');

router.use('/', homeRoutes);
router.use('/dashboard', dashRoutes);
router.use('/api', apiRoutes);

module.exports = router;