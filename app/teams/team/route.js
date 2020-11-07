import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TeamsTeamRoute extends Route {
  async model({ team_id }){
    const resp = await fetch(`/api/teams/${team_id}`);
    return resp.json()
  }
}
