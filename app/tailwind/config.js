const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';

module.exports = {
  purge: {
    enabled: isProduction,
    content: [
    './app/index.html',
    './app/templates/**/*.hbs',
    './app/components/**/*.hbs'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
