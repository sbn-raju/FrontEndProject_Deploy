const Router = require("express");
const getprojectPageController = require("../controllers/projectPage.controllers.js");

const route = Router();
const projectRoute = route.get("/api/project",getprojectPageController);

module.exports = projectRoute;