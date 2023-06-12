const userRoutes = require('./user.routes');

const apiRouter = (app) => {
  app.use(userRoutes);
}

const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger.json");

// recibe como parametro una instancia de express
const apiRoutes = (app) => {

  // TODO una ruta para las categorias
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};


module.exports = apiRouter;
