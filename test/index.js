let { yun_db, yun_LStorage } = require('../lib/index.umd')

let sessionStorage = yun_db.sessionStorage;

console.log(new yun_LStorage())

console.log(new sessionStorage())