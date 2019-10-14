const express = require('express');
const users = require('./users');
const pageDefinition = require('./pageDefinition');
const pages = require('./pages');
const contentDefinition = require('./contentDefinition');
const contents = require('./contents');

const router = express.Router();

router.use('/users', users);
router.use('/page-definition', pageDefinition);
router.use('/pages', pages);
router.use('/content-definition', contentDefinition);
router.use('/contents', contents);

module.exports = router;