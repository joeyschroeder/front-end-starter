// import { uniqueId } from 'lodash';
import { Server as MirageJsServer, Model, Factory } from 'miragejs';

/* Creating a list of names to use for the mock data. */
const MOCK_USERNAMES = ['Luke', 'Leia', 'Han', 'Anakin', 'Obi Wan'];

export const Server = () => {
  return new MirageJsServer({
    models: {
      user: Model,
    },
    factories: {
      /* Creating a factory for the user model. */
      user: Factory.extend({
        id(index) {
          return Number(index);
        },
        name(index) {
          return MOCK_USERNAMES[index];
        },
        active() {
          return true;
        },
      }),
    },
    seeds(server) {
      /* Creating a list of users in the database. */
      server.createList('user', MOCK_USERNAMES.length);
    },
    routes() {
      const server = this;

      server.namespace = 'api';
      server.resource('users');

      /* Returning all the users in the database. */
      server.get('/users', (schema) => {
        return schema.users.all();
      });

      /* Creating a new user. */
      server.post('/users', (schema, request) => {
        const { requestBody } = request;
        const { name, active } = JSON.parse(requestBody);

        if (!name) throw new Error('Could not save user, name is required.');
        const data = { name, active };
        // console.log('data: ', data);

        return schema.create('user', data);
      });
    },
  });
};
