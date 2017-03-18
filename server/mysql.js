  import mysql from 'mysql';
  import yaml from 'yamljs';

  // load config from server.yaml
  const config = yaml.load('server/config/server.yaml');

  const connection = mysql.createPool({
    connectionLimit : config.mysql.connectionLimit,
    host     : config.mysql.host,
    user     : config.mysql.user,
    password : config.mysql.password,
    database : config.mysql.database
  });

  export default connection;
