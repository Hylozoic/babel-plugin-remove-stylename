const jsx = require('babel-plugin-syntax-jsx')

module.exports = function () {
  return {
    inherits: jsx,
    visitor: {
      JSXElement (path, state) {
        path.node.openingElement.attributes = path.node.openingElement.attributes.filter(
          a => a.name ? a.name.name !== 'styleName' : true
        )
      }
    }
  }
}
