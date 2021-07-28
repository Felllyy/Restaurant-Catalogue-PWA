Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _nowPlaying = _interopRequireDefault(require('../views/pages/now-playing'));

const _upcoming = _interopRequireDefault(require('../views/pages/upcoming'));

const _detail = _interopRequireDefault(require('../views/pages/detail'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = {
  '/': _nowPlaying.default,
  // default page
  '/now-playing': _nowPlaying.default,
  '/upcoming': _upcoming.default,
  '/detail/:id': _detail.default,
};
const _default = routes;
exports.default = _default;
