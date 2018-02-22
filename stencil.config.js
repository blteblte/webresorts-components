const sass = require('@stencil/sass');

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
  ],

  plugins: [
    sass()
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
