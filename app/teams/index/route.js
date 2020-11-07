import Route from '@ember/routing/route';

export default class TeamsIndexRoute extends Route {
  beforeModel() {
    const teams = this.modelFor('teams');
    if(teams.length) {
      this.transitionTo('teams.team', teams[0].id)
    }
  }
}
