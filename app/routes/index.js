import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class IndexRoute extends Route {
  beforeModel() {
    const group = this.store.createRecord('group');
    const person1 = this.store.createRecord('person', { name: 'tom' });
    const person2 = this.store.createRecord('person', { name: 'dave' });
    this.store.createRecord('person', { name: 'mike' });
    group.people.addObject(person1);
    group.people.addObject(person2);
  }
  model() {
    return hash({
      group: this.store.peekAll('group').firstObject,
      people: this.store.peekAll('person')
    });
  }
}
