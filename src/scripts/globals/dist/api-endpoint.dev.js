Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _config = _interopRequireDefault(require('./config'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const API_ENDPOINT = {
  HOME: ''.concat(_config.default.BASE_URL, 'list'),
  FAVORITE: ''.concat(_config.default.BASE_URL, 'list/favorite?api_key=').concat(_config.default.KEY, '&language=').concat(_config.default.DEFAULT_LANGUAGE, '&page=1'),
  DETAIL: function DETAIL(id) {
    return ''.concat(_config.default.BASE_URL, 'detail/').concat(id, '?api_key=').concat(_config.default.KEY);
  },
  REVIEW: ''.concat(_config.default.BASE_URL, 'review'),
};
const _default = API_ENDPOINT;
exports.default = _default;
