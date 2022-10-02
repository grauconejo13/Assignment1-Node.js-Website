"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _indexControllerServer = require("../controllers/index.controller.server.js");

var router = (0, _express.Router)();
router.get('/', _indexControllerServer.displayHomePage);
router.get('/home', _indexControllerServer.displayHomePage);
router.get('/about', _indexControllerServer.displayAboutPage);
router.get('/projects', _indexControllerServer.displayProjectsPage);
router.get('/services', _indexControllerServer.displayServicesPage);
router.get('/contact', _indexControllerServer.displayContactPage);
var _default = router;
exports["default"] = _default;