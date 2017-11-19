'use strict';

window.renderStatistics = function (ctx, names, times) {
  var results = [];
  var scorePosition = {x:165, y:100};

  for (var i = 0; i < names.length; i++) {
    results.push({name: names[i], time: Math.floor(times[i])});
  }

  results.sort(function (a, b) {
    return a.time - b.time;
  });

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.strokeText('Ура вы победили!', 220, 20);
  ctx.strokeText('Список результатов:', 220, 44);

  var drawScore = function (player, position) {
    if (player.name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var opacity = +Math.random().toFixed(1) || 0.1;
      ctx.fillStyle = 'rgba(0, 0, 255,' + opacity + ')';
    }

    ctx.fillRect(position.x, position.y, 40, 150)
  }

  for (i = 0; i < results.length; i++) {
    drawScore(results[i], scorePosition);
    scorePosition.x += 90;
  }

};
