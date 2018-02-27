const sass = require('@stencil/sass');
const postcss = require('@stencil/postcss');
const autoprefixer = require('autoprefixer');

exports.config = {

  namespace: 'wrsts-components',

  bundles: [
    { components: ['wrsts-checkbox'] },
    { components: ['wrsts-tinymce'] },
    { components: [
        'wrsts-tab-control'
      , 'wrsts-tab-control-content'
      , 'wrsts-tab-control-contents'
      , 'wrsts-tab-control-tab'
      , 'wrsts-tab-control-tabs'
    ] },
    { components: ['wrsts-select', 'wrsts-select-option'] },
    { components: ['wrsts-json-form'] },
    { components: ['wrsts-button'] },
    { components: ['wrsts-input'] }
  ],

  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()]
    })
  ],

  // copy: [
  //   { src: 'vendor/tinymce/themes', dest: 'themes' },
  //   { src: 'vendor/tinymce/skins', dest: 'skins' }
  // ],

  generateDistribution: true,
  generateWWW: true
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
