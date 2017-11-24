'use strict';
var wizardDataTemplate = {
  names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green']
};
var wizards = [];
var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var getRandomNum = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var Wizard = function () {
  this.name = wizardDataTemplate.names[getRandomNum(0, wizardDataTemplate.names.length - 1)];
  this.surname = wizardDataTemplate.surnames[getRandomNum(0, wizardDataTemplate.surnames.length - 1)];
  this.coatColor = wizardDataTemplate.coatColors[getRandomNum(0, wizardDataTemplate.coatColors.length - 1)];
  this.eyesColor = wizardDataTemplate.eyesColors[getRandomNum(0, wizardDataTemplate.eyesColors.length - 1)];
};

var createWizards = function (amount) {
  for (var i = 0; i < amount; i++) {
    wizards.push(new Wizard());
  }
};

createWizards(4);

var createWizardElement = function (wizard) {
  var wizardElementTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = wizardElementTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + '\n' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function () {
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(createWizardElement(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

renderWizards();
