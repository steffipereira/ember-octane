import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'

const AUTH_KEY = 'shlack-userId';
export default class AuthService extends Service {
  @service router;

  get currentUserId() {
    return window.localStorage.getItem(AUTH_KEY)
  }

  loginWithUserId(userId) {
    window.localStorage.setItem(AUTH_KEY, userId)
    this.router.transitionTo('teams')
  }

  @action
  logout() {
    window.localStorage.removeItem(AUTH_KEY)
    this.router.transitionTo('login')
  }

}
