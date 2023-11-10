const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json())

// sqlite 3
const sqlite3 = require('sqlite3').verbose();
const users = new sqlite3.Database('backend/datebases/users.db');


// sql table creates
let usersSql = 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, login STRING, password TEXT)'; 
users.run(usersSql);



app.post('/api/login/', (req, res) => {
  usersSql = 'SELECT * FROM users';
  let counter = 0;
  users.all(usersSql, [], (err, rows) => {
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      if (row.login == req.body.userEmail && row.password == req.body.password) {
        console.log(row.login, row.password);
        res.json({success: true, reqType: 'log'});
        break;
      } else {
        counter++;
      }
    }
    if (counter == rows.length) {
      res.json({success: false, reqType: 'log'});
    }
  });

  //
})


app.post('/api/reg/', (req, res) => {
  usersSql = 'SELECT * FROM users';
  let counter = 0;

  users.all(usersSql, [], (err, rows) => {
    if (err) return console.log(err.message);
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      if (row.login == req.body.userEmail) {
        res.json({success: false, err: 'repeatLogin', reqType: 'reg'});
        break;
      } else {
        counter++;
      }
    }
    if (counter == rows.length) {
      usersSql =  'INSERT INTO users(login, password) VALUES (?, ?)';
      users.run(
        usersSql, [`${req.body.userEmail}`, `${req.body.password}`],
        (err) => {
          if (err) return console.log(err.message);
        }
      );
      
      res.json({success: true});
    }
  });
})

// menu dishes
const menuDishes = new sqlite3.Database('backend/datebases/menu.db');
let menuDishesSql = 'CREATE TABLE IF NOT EXISTS dishes (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, desc TEXT, price INTEGER)';
menuDishes.run(menuDishesSql);

// получаем данные и отправляем на фронт
menuDishesSql = 'SELECT * FROM dishes';
app.get('/api/menu-dishes', (request, response) => {
  menuDishes.all(menuDishesSql, [], (err, rows) => {
    if (err) return console.log(err.message);
    response.json(
      rows,
    )
  });
})

// прослушивание порта
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});