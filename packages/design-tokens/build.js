const StyleDictionary = require('style-dictionary').extend('config');

StyleDictionary.registerTransform({
  name: 'custom/attribute',
  type: 'attribute',
  transformer: function(token) {
    const attributes = StyleDictionary.transform['attribute/cti'].transformer(token);
    if (attributes.category === 'tamanio') {
      attributes.category = 'size';
    }
    return attributes;
  }
});

StyleDictionary.buildAllPlatforms();
