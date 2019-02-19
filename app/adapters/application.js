import GraphQLAdapter from 'ember-graphql-adapter';
import config from '../config/environment';

export default GraphQLAdapter.extend({
  endpoint: `${config.apiBaseUrl}/graphql`
});
