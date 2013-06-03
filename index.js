/**
 * Add styling support for HTML5 elements in legacy browsers
 *
 * @api public
 * @param {Array} [tags] The tags to apply; defaults to `html5.tags`
 * @return {Array} The applied `tags`
 */
var html5 = module.exports = function (tags) {
  tags = tags || html5.tags

  if (!document.addEventListener)
    for (var i = tags.length - 1; i >= 0; i--)
      document.createElement(tags[i])

  return tags
}

/**
 * All default HTML5 `tags`
 *
 * @api private
 * @type {Array}
 */
html5.tags =[
  'article', 'aside', 'audio', 'canvas', 'command', 'datalist',
  'details', 'figcaption', 'figure', 'footer', 'header', 'hgroup',
  'keygen', 'mark', 'meter', 'nav', 'output', 'progress', 'rp', 'rt',
  'ruby', 'section', 'source', 'summary', 'time', 'video', 'wbr'
]
