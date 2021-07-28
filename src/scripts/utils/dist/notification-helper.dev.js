Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
const NotificationHelper = {
  sendNotification: function sendNotification(_ref) {
    const { title } = _ref;
    const { options } = _ref;

    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return;
    }

    if (!this._checkPermission()) {
      console.log('User did not yet granted permission');

      this._requestPermission();

      return;
    }

    this._showNotification({
      title,
      options,
    });
  },
  _checkAvailability: function _checkAvailability() {
    return !!('Notification' in window);
  },
  _checkPermission: function _checkPermission() {
    return Notification.permission === 'granted';
  },
  _requestPermission: function _requestPermission() {
    let status;
    return regeneratorRuntime.async((_context) => {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(Notification.requestPermission());

          case 2:
            status = _context.sent;

            if (status === 'denied') {
              console.log('Notification Denied');
            }

            if (status === 'default') {
              console.log('Permission closed');
            }

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    });
  },
  _showNotification: function _showNotification(_ref2) {
    let title; let options; let
      serviceWorkerRegistration;
    return regeneratorRuntime.async((_context2) => {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            title = _ref2.title, options = _ref2.options;
            _context2.next = 3;
            return regeneratorRuntime.awrap(navigator.serviceWorker.ready);

          case 3:
            serviceWorkerRegistration = _context2.sent;
            serviceWorkerRegistration.showNotification(title, options);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    });
  },
};
const _default = NotificationHelper;
exports.default = _default;
