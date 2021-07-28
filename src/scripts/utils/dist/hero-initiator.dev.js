Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
const HeroInitiator = {
  init: function init() {
    const _this = this;

    let detailTag; let homeTag; let favoriteTag; let
      heroContainer;
    return regeneratorRuntime.async((_context) => {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(document.querySelector('#detailContent'));

          case 2:
            detailTag = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(document.querySelector('#homeTag'));

          case 5:
            homeTag = _context.sent;
            _context.next = 8;
            return regeneratorRuntime.awrap(document.querySelector('#favoriteTag'));

          case 8:
            favoriteTag = _context.sent;
            _context.next = 11;
            return regeneratorRuntime.awrap(document.querySelector('.jumbotron'));

          case 11:
            heroContainer = _context.sent;
            detailTag.addEventListener('click', (event) => {
              _this._toggleDrawer(event, heroContainer);
            });
            homeTag.addEventListener('click', (event) => {
              _this._closeDrawer(event, heroContainer);
            });
            favoriteTag.addEventListener('click', (event) => {
              _this._closeDrawer(event, heroContainer);
            });

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    });
  },
  _toggleDrawer: function _toggleDrawer(event, heroContainer) {
    event.stopPropagation();
    heroContainer.classList.toggle('diactive');
  },
  _closeDrawer: function _closeDrawer(event, heroContainer) {
    event.stopPropagation();
    heroContainer.classList.remove('diactive');
  },
};
const _default = HeroInitiator;
exports.default = _default;
