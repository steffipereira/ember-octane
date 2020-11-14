import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TeamsTeamChannelRoute extends Route {
  async model({channel_id}) {
    const { team_id } = this.paramsFor('teams.team')
    const response = await fetch(`/api/teams/${team_id}/channels/${channel_id}`)
    return response.json()
  }
}
