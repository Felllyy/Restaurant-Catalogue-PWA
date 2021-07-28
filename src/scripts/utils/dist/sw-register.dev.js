Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var swRegister = function swRegister() {
  return regeneratorRuntime.async((_context) => {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js');
            console.log('SW registered');
          }

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  });
};

var _default = swRegister;
exports.default = _default;
