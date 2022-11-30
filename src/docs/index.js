import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
    info: {
        title: "Express API with Swagger",
        version: "1.0.0",
        description:
          "This is a simple API application made with Express and documented with Swagger for Toolbox",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Carlos Ivan Cochancod",
          email: "co.carlosivan@email.com",
        },
      },
    openapi: '3.0.0',
    servers: [
        {
            url: 'http://localhost:4000/v1'
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: ['src/docs/**/specification.yaml'],
};
const swaggerSpec = swaggerJSDoc(options);

export default (path, app) => app.use(path, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
