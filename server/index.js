  'use strict';
  import Hapi from 'hapi';
  import routes from '../server/routes';
  const server = new Hapi.Server();

  server.connection({ port:3000, host: '192.168.56.103' })
  server.route(routes);

  server.start((err)=>{
    if (err) {
       throw err;
   }
   console.log(`Server running at: ${server.info.uri}`);
  });
