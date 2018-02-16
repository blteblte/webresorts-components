exports.config = {

  namespace: 'wrsts-components',

  bundles: [
    { components: ['wrsts-checkbox'] }
  ],

  generateDistribution: true,
  generateWWW: true
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
