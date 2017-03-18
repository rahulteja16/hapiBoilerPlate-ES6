'use strict';

import pool from '../../server/mysql';

const user = (request,reply)=>{
  pool.getConnection(function(err, connection) {
  connection.query('SELECT * FROM users', function (error, results, fields) {
    connection.release();
    reply(results);
    if (error) throw error;
    });
  });
}

export default user;
