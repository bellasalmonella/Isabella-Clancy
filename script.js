document.addEventListener('DOMContentLoaded', function () {
  const gameContainer = document.querySelector(".game-container");
  const blueBlock = document.getElementById('blue-block');
  const redBlock = document.getElementById('red-block');
  const yellowBlock1 = document.getElementById('yellow-block1');
  const yellowBlock2 = document.getElementById('yellow-block2');
  const greenBlock1 = document.getElementById('green-block1');
  let blueTopPosition = -150;
  let redTopPosition = -150;
  let yellow1TopPosition = -150;
  let yellow2TopPosition = -75;
  let green1TopPosition = -150;

  function moveBlueBlockDown() {
    blueTopPosition += 10;
    blueBlock.style.top = blueTopPosition + 'px';

    if (blueTopPosition >= 530) {
      clearInterval(blueIntervalId);
      setTimeout(startRedBlockFall, 2000);
    }
  }
  function moveRedBlockDown() {
    redTopPosition += 10;
    redBlock.style.top = redTopPosition + 'px';

    if (redTopPosition >= 390) {
      clearInterval(redIntervalId);
      setTimeout(startyellowBlock1Fall, 2000);
      setTimeout(startyellowBlock2Fall, 2000);
    }
  }

  function startRedBlockFall() {
    redIntervalId = setInterval(moveRedBlockDown, 100);
  }

  function moveYellowBlock1Down() {
    yellow1TopPosition += 10;
    yellowBlock1.style.top = yellow1TopPosition + 'px';

    if (yellow1TopPosition >= 460) {
      clearInterval(yellow1IntervalId);
    }
  }

  function startyellowBlock1Fall() {
    yellow1IntervalId = setInterval(moveYellowBlock1Down, 100);
  }

  function moveYellowBlock2Down() {
    yellow2TopPosition += 10;
    yellowBlock2.style.top = yellow2TopPosition + 'px';

    if (yellow2TopPosition >= 530) {
      clearInterval(yellow2IntervalId);
      setTimeout(startgreenBlock1Fall, 2000);
    }
  }

  function startyellowBlock2Fall() {
    yellow2IntervalId = setInterval(moveYellowBlock2Down, 100);
  }


  function moveGreenBlock1Down() {
    green1TopPosition += 10;
    greenBlock1.style.top = green1TopPosition + 'px';

    if (green1TopPosition >= 310) {
      clearInterval(green1IntervalId);
    }
  }

  function startgreenBlock1Fall() {
    green1IntervalId = setInterval(moveGreenBlock1Down, 100);
  }

  blueIntervalId = setInterval(moveBlueBlockDown, 100);

});


  