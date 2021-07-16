Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
const UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();

    const splitedUrl = this._urlSplitter(url);

    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? '/'.concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? '/'.concat(splitedUrl.verb) : '');
  },
};
const _default = UrlParser;
exports.default = _default;
