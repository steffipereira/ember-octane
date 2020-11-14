import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class ChatContainerComponent extends Component {
  @service auth;
  @tracked messages = []

  @action
  async loadMessages() {
    const { channel: { id, teamId } } = this.args;
    const response = await fetch(`/api/teams/${teamId}/channels/${id}/messages`)
    this.messages = await response.json();
  }

  @action
  async createMessage(body) {
    const { channel: { id: channelId, teamId }} = this.args;
    const userId = this.auth.currentUserId;
    const response = await fetch(`/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        teamId,
        channelId,
        userId,
        body,
      }),
    });
    const messageData = await response.json();
    const user = await (await fetch(`/api/users/${userId}`)).json();
    this.messages = [...this.messages, { ...messageData, user} ]
  }

  @action
  async deleteMessage(message_id) {
    const response = await fetch(`/api/messages/${message_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const msg_id = this.messages.map( msg => msg.id );
    const deleteMsg = msg_id.indexOf(message_id);
    this.messages.splice(deleteMsg, 1);
    const deleteMsgsArray = this.messages.splice(deleteMsg, 1);
    this.message = [...this.messages, deleteMsgsArray]
  }
}
