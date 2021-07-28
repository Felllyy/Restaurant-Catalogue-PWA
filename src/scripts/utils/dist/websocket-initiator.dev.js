Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _notificationHelper = _interopRequireDefault(require('./notification-helper'));

const _config = _interopRequireDefault(require('../globals/config'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WebSocketInitiator = {
  init: function init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },
  _onMessageHandler: function _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);

    _notificationHelper.default.sendNotification({
      title: ''.concat(restaurant.title, ' is on cinema!'),
      options: {
        body: restaurant.overview,
        image: ''.concat(_config.default.BASE_IMAGE_URL + restaurant.poster_path),
      },
    });
  },
};
const _default = WebSocketInitiator;
exports.default = _default;
