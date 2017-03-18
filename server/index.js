  'use strict';
  import Hapi from 'hapi';
  import yaml from 'yamljs';
  import routes from '../server/routes';
  const config = yaml.load('server/config/server.yaml');
  const server = new Hapi.Server();

  server.connection({ port:config.port, host: config.host })
  server.route(routes);

  server.start((err)=>{
    if (err) {
       throw err;
   }
   console.log(`Server running at: ${server.info.uri}`);
  });
