var express = require('express');
var router = express.Router();
const shell = require('shelljs');
const {projectPath} = require("../setting")

/* GET home page. */
router.get('/', function (req, res, next) {
  shell.exec(`
  cd ${projectPath} &&
  git pull origin master &&
  yarn &&
  yarn build
  `, function (code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
    if (code === 0) {
      console.log('成功')
    }
    res.send('ok');
  });
});

module.exports = router;
