let app = require('../app');
// let PORT = 11111;

// app.listen(process.env.PORT || PORT);



let PORT = process.env.PORT || 11111;


app.listen(PORT, () => {
  console.log(`${PORT}로 express 실행!!`)

});