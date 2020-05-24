const proxy = [
    {
      context: '/desafiomirante',
      target: 'http://localhost:8080',
      pathRewrite: {'http://localhost:4200/desafiomirante' : 'http://localhost:8080'}
      }
  ];
  module.exports = proxy;
  