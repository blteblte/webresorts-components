const sass = require('@stencil/sass');

exports.config = {

  namespace: 'wrsts-components',

  bundles: [
    { components: ['wrsts-checkbox'] },
    { components: ['wrsts-tinymce'] }
  ],

  plugins: [
    sass()
  ],

  copy: [
    { src: 'vendor/tinymce/themes', dest: 'themes' },
    { src: 'vendor/tinymce/skins', dest: 'skins' }
  ],

  generateDistribution: true,
  generateWWW: true
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
