Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const swRegister = function swRegister() {
  return regeneratorRuntime.async((_context) => {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').then((registration) => {
              console.log('SW registered: ', registration);
            }).catch((registrationError) => {
              console.log('SW registration failed: ', registrationError);
            });
          }

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  });
};

const _default = swRegister;
exports.default = _default;
