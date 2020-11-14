import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ChannelFooterComponent extends Component {
  @tracked body = '';

  get isDisabled() {
    return !this.body
  }

  @action
  getMessageBody(e) {
    const { target } = e;
    this.body = target.value
  }

  @action
  async sendMessage(e) {
    e.preventDefault();
    await this.args.submitMessage(this.body);
    this.body = '';
  }
}
