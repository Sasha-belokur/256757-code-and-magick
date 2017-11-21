'use strict';

window.renderStatistics = function (ctx, names, times) {
  var results = [];
  var scorePosition = {x: 165, y: 100};
  var MAX_COLUMN_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var COLUMN_DISTANCE = 50;
  var columnHeight;

  for (var i = 0; i < names.length; i++) {
    results.push({name: names[i], time: Math.floor(times[i])});
  }

  results.sort(function (a, b) {
    return b.time - a.time;
  });

  var drawCloud = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(100, 10, 420, 270);

    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.strokeText('Ура вы победили!', 220, 20);
    ctx.strokeText('Список результатов:', 220, 44);
  };

  var drawScore = function (player, position) {
    var opacity = player.name === 'Вы' ? 1 : +Math.random().toFixed(1) || 0.1;
    var color = player.name === 'Вы' ? 'rgba(255, 0, 0,' + opacity + ')' : 'rgba(0, 0, 255,' + opacity + ')';

    ctx.fillStyle = color;

    ctx.strokeText(player.name, position.x, scorePosition.y + columnHeight + 10);
    ctx.strokeText(player.time, position.x, scorePosition.y - 20);
    ctx.fillRect(position.x, position.y, COLUMN_WIDTH, columnHeight);
  };

  var drawColumns = function () {
    for (i = 0; i < results.length; i++) {
      columnHeight = Math.round(results[i].time * MAX_COLUMN_HEIGHT / results[0].time);
      scorePosition.y = 100 + MAX_COLUMN_HEIGHT - columnHeight;

      drawScore(results[i], scorePosition, columnHeight);

      scorePosition.x += COLUMN_WIDTH + COLUMN_DISTANCE;
    }
  };

  drawCloud();
  drawColumns();
};
