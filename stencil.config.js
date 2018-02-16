exports.config = {

  namespace: 'webresorts-components',

  bundles: [
    { components: ['webresorts-checkbox'] }
  ],

  generateDistribution: true,
  generateWWW: true
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
