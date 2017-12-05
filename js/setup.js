'use strict';
var getRandomNum = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var Wizard = function () {
  var wizardDataTemplate = {
    names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green']
  };

  this.name = wizardDataTemplate.names[getRandomNum(0, wizardDataTemplate.names.length - 1)];
  this.surname = wizardDataTemplate.surnames[getRandomNum(0, wizardDataTemplate.surnames.length - 1)];
  this.coatColor = wizardDataTemplate.coatColors[getRandomNum(0, wizardDataTemplate.coatColors.length - 1)];
  this.eyesColor = wizardDataTemplate.eyesColors[getRandomNum(0, wizardDataTemplate.eyesColors.length - 1)];
};

var createWizards = function (amount) {
  var wizards = [];

  for (var i = 0; i < amount; i++) {
    wizards.push(new Wizard());
  }

  return wizards;
};

var createWizardElement = function (wizard) {
  var wizardElementTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = wizardElementTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + '\n' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function () {

  var wizards = createWizards(4);
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(createWizardElement(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

// var openUserDialog = function () {
//   var userDialog = document.querySelector('.setup');
//   userDialog.classList.remove('hidden');
//   document.querySelector('.setup-similar').classList.remove('hidden');

//   renderWizards();
// };

var popupEscHandler = function (evt) {
  var ESC_KEYCODE = 27;

  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  var setup = document.querySelector('.setup');

  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscHandler);
};

var closePopup = function () {
  var setup = document.querySelector('.setup');

  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscHandler);
};

var changeEyesColor = function (obj) {
  var colors = ['black', 'red', 'blue', 'yellow', 'green'];
  var counter = 1;

  return function () {
    var color = colors[counter++ % colors.length];
    obj.style.fill = color;
  };
};

var changeCoatColor = function (obj) {
  var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var counter = 1;

  return function () {
    var color = colors[counter++ % colors.length];
    obj.style.fill = color;
  };
};

var addEventListeners = function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var ENTER_KEYCODE = 13;

  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', closePopup);
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  wizardEyes.addEventListener('click', changeEyesColor(wizardEyes));
  wizardCoat.addEventListener('click', changeCoatColor(wizardCoat));
};

addEventListeners();
