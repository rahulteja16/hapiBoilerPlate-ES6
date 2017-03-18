  'use strict';
  // imports
  import Hapi from 'hapi';
  import yaml from 'yamljs';

  // import routes
  import routes from '../server/routes';
  // load config from server.yaml
  const config = yaml.load('server/config/server.yaml');
  //create server instance
  const server = new Hapi.Server();

  // connect to server
  server.connection({ port:config.port, host: config.host });

  // routes
  server.route(routes);

  // start server
  server.start((err)=>{
    if (err) {
       throw err;
   }
   console.log(`Server running at: ${server.info.uri}`);
  });
