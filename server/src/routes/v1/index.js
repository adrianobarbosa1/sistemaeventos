const express = require("express")
const authRoute = require("./auth.route")
const userRoute = require("./user.route")
const registerRoute = require("./register.route")
const config = require("../../config/config")
const inputDocumentRoute = require("./inputDocument.route")

const router = express.Router()

const defaultRoutes = [
  { path: "/auth", route: authRoute },
  { path: "/users", route: userRoute },
  { path: "/register", route: registerRoute },
  { path: "/inputdocument", route: inputDocumentRoute },
]

// const devRoutes = [
//   // routes available only in development mode
//   {
//     path: '/docs',
//     route: docsRoute,
//   },
// ];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

/* istanbul ignore next */
// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router
