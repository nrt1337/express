const express = require("express");
const jsonParser = express.json();
const router = express.Router();

let user = { user_agent: 0 };
let com = '';

router.get("/", (req, res) => {
  res.send("Привет!");
});

router.get("/stats", (req, res) => {
	user.user_agent++;
  res.send(`<table>
  			<tr><td>User-agent:</td>
  			<td>Request:</td></tr>
  			<tr><td>${req.headers["user-agent"]}</td>
  			<td>${user.user_agent}</td></tr>
  			</table>`);
});

router.get("/comments", (req, res) => {
  res.send(com);
});

router.post("/comments", jsonParser, (req, res) => {
  console.log(req.body);
	com += JSON.stringify(req.body);
	res.send('Спасибо, за вашу отзывчивость!');
});

module.exports = router;