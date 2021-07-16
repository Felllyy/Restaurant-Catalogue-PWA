Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
const DrawerInitiator = {
  init: function init(_ref) {
    const _this = this;

    const { button } = _ref;
    const { drawer } = _ref;
    const { hero } = _ref;
    const { content } = _ref;
    button.addEventListener('click', (event) => {
      _this._toggleDrawer(event, drawer);
    });
    hero.addEventListener('click', (event) => {
      _this._closeDrawer(event, drawer);
    });
    content.addEventListener('click', (event) => {
      _this._closeDrawer(event, drawer);
    });
  },
  _toggleDrawer: function _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('active');
  },
  _closeDrawer: function _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('active');
  },
};
const _default = DrawerInitiator;
exports.default = _default;
