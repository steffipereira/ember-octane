import Component from '@glimmer/component';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component {
  @tracked userId = null
  @service auth;

  @action
  onSelected(e) {
   this.userId = e.target.value;
  }

  @action
  onSubmit(e) {
    const { target } = e;
    const value = target.querySelector('select').value
    e.preventDefault();
    this.auth.loginWithUserId(value)
  }

  get isDisabled() {
    return !this.userId
  }
}
