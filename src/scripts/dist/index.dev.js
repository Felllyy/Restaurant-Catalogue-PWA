/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
require('regenerator-runtime');

require('../styles/style.css');

require('../styles/responsive.css');

const _app = _interopRequireDefault(require('./views/app'));

const _swRegister = _interopRequireDefault(require('./utils/sw-register'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _app.default({
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
