"use strict";
import {users, test} from './controllers/index';
module.exports = [
  {
    method: "GET",
    path: "/",
    handler: users
  },
  {
    method: "GET",
    path: "/test",
    handler: test
  }
];
