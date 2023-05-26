const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const restAPI = require('./router/rest');
const dbAPI = require("./controllers/controller");

const HOST = "127.0.0.1";
const PORT = 8000;


const app = express();
app.use(express.static('public'));
app.use(morgan('tiny'));
app.use("/v1", restAPI);
app.use('/v2', dbAPI);

app.listen(PORT, HOST, () => {
  console.log(`Сервер запущен http://${HOST}:${PORT}`);
});

//app.use(function(err, req, res, next) {
//	if(err.statusCode)
//	{
//		res.status(err.statusCode).json(err.message);
//	}else{
//		res.status(400).json("Отправьте запрос корректно!");
//	}
//});

app.use((req, res, next) =>{
  res.status(400).send('Такой страницы не существует!');
});