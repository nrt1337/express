const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const restAPI = require('./router/rest');
const HOST = "127.0.0.1";
const PORT = 8000;


app.use(express.static('public'));
app.use("/v1", restAPI);

app.listen(PORT, HOST, () => {
  console.log(`Сервер запущен http://${HOST}:${PORT}`);
});

app.use(function(err, req, res, next) {
	if(err.statusCode)
	{
		res.status(err.statusCode).json(err.message);
	}else{
		res.status(400).json("Отправьте запрос корректно!");
	}
});