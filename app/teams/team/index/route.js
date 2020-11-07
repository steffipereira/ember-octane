import Route from '@ember/routing/route';

export default class TeamsTeamIndexRoute extends Route {
  beforeModel() {
    const { id, channels } = this.modelFor('teams.team');
    if(channels.length){
      this.transitionTo('teams.team.channel', id, channels[0].id )
    }
  }
}
