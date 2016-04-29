import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const deck = this.modelFor('deck');
    // debugger;
    return deck.get('slides');
  },

  afterModel(model) {
    // TODO transition to latest slide
    // debugger;
    const id = model.get('lastObject.id');
    Ember.assert('Should have at least one slide, but not loaded', id);
    this.transitionTo('deck.slides.slide', id);
  }
});
