require('regenerator-runtime');

require('../styles/main.css');

require('../styles/css-grid.css');

require('../styles/detail.css');

require('../styles/navbar.css');

require('../styles/responsive.css');

require('lazysizes');

require('lazysizes/plugins/parent-fit/ls.parent-fit');

var _app = _interopRequireDefault(require('./views/app'));

var _swRegister = _interopRequireDefault(require('./utils/sw-register'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _app.default({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('.mainNav'),
  content: document.querySelector('#mainContent'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
  (0, _swRegister.default)();
});
