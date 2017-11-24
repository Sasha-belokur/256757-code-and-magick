'use strict';
var wizardTemplate = {
  names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green']
};

var wizards = [];

var getRandomNum = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var Wizard = function () {
  this.name = wizardTemplate.names[getRandomNum(0, wizardTemplate.names.length - 1)];
  this.surname = wizardTemplate.surnames[getRandomNum(0, wizardTemplate.surnames.length - 1)];
  this.coatColor = wizardTemplate.coatColors[getRandomNum(0, wizardTemplate.coatColors.length - 1)];
  this.eyesColor = wizardTemplate.eyesColors[getRandomNum(0, wizardTemplate.eyesColors.length - 1)];
};

var createWizards = function (amount) {
  for (var i = 0; i < amount; i++) {
    wizards.push(new Wizard());
  }
};

createWizards(4);
