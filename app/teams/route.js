import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default class TeamsRoute extends Route {
  @service auth;

  beforeModel() {
    if(!this.auth.currentUserId) {
      this.transitionTo('login')
    }
  }
}
