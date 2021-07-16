/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _home = _interopRequireDefault(require('../views/pages/home'));

const _favorite = _interopRequireDefault(require('../views/pages/favorite'));

const _detail = _interopRequireDefault(require('../views/pages/detail'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = {
  '/': _home.default,
  // default page
  '/home': _home.default,
  '/favorite': _favorite.default,
  '/detail/:id': _detail.default,
};
const _default = routes;
exports.default = _default;
