import { Meteor } from 'meteor/meteor';
import { setupApi } from '../server/routes/api'

Meteor.startup(() => {
  setupApi();
});
