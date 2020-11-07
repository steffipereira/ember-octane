import EmberRouter from '@ember/routing/router';
import config from 'shlack/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('teams', function() {
    this.route('team', { path: ':team_id' }, function() {
      this.route('channel', { path: ':channel_id' });
    });
  });
  this.route('login');
});
