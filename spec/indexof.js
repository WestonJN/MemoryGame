const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <title>Memory Game</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="heading">
    <h2>Car Logo Memory Game</h2>
  </div>
  <section class="memGame">
    <div class="memBlock" data-framework="Nissan">
      <img class="front" src="img/car1.png" alt="Nissan" />
      <img class="back" src="img/Back.png" alt="Car" />
    </div>
    <div class="memBlock" data-framework="Nissan"> 
      <img class="front" src="img/car1.png" alt="Nissan" />
      <img class="back" src="img/Back.png" alt="Car" />
    </div>

    <div class="memBlock" data-framework="VW">
      <img class="front" src="img/car2.png" alt="VW" />
      <img class="back" src="img/Back.png" alt="Car" />
    </div>
    <div class="memBlock" data-framework="VW">
      <img class="front" src="img/car2.png" alt="VW" />
      <img class="back" src="img/Back.png" alt="Car" />
    </div>

    <div class="memBlock" data-framework="Benz">
      <img class="front" src="img/car3.png" alt="Benz" />
      <img class="back" src="img/Back.png" alt="Car" />
    </div>
    <div class="memBlock" data-framework="Benz">
      <img class="front" src="img/car3.png" alt="Benz" />
      <img class="back" src="img/Back.png" alt="Car" />
    </div>

    <div class="memBlock" data-framework="Ferarri">
      <img class="front" src="img/car6.png" alt="Ferarri" />
      <img class="back" src="img/Back.png" alt="Car" />
    </div>
    <div class="memBlock" data-framework="Ferarri">
      <img class="front" src="img/car6.png" alt="Ferarri" />
      <img class="back" src="img/Back.png" alt="Car" />
    </div>

    <div class="memBlock" data-framework="Jaguar">
      <img class="front" src="img/car4.png" alt="Jaguar" />
      <img class="back" src="img/Back.png" alt="Car" />
    </div>
    <div class="memBlock" data-framework="Jaguar">
      <img class="front" src="img/car4.png" alt="Jaguar" />
      <img class="back" src="img/Back.png" alt="Car" />
    </div>

    <div class="memBlock" data-framework="Tesla">
      <img class="front" src="img/car5.png" alt="Tesla" />
      <img class="back" src="img/Back.png" alt="Car" />
    </div>
    <div class="memBlock" data-framework="Tesla">
      <img class="front" src="img/car5.png" alt="Tesla" />
      <img class="back" src="img/Back.png" alt="Car" />
    </div>
  </section>

  <script src="function.js"></script>
</body>
</html>
`
module.exports = html;