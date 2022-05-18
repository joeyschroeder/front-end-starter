import { Server as MirageJsServer, Model, Factory } from 'miragejs';

/* Creating a list of names to use for the mock data. */
const MOCK_USERNAMES = ['Anakin', 'Han', 'Leia', 'Luke', 'Obi Wan'];

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
        const { name, active = true } = JSON.parse(requestBody);

        if (!name) throw new Error('Could not save user, name is required.');
        const data = { name, active };

        return schema.create('user', data);
      });

      /* Updating the user. */
      server.put('/users', (schema, request) => {
        const { requestBody } = request;
        const { id } = JSON.parse(requestBody);

        if (!id) throw new Error('Could not update user, id is required.');
        const user = schema.db.users.findBy({ id });

        if (!user) throw new Error(`Could not find user with id: ${id}.`);
        return schema.db.users.update(id, { active: !user.active });
      });

      /* Deleting the user. */
      server.delete('/users', (schema, request) => {
        const { requestBody } = request;
        const { id } = JSON.parse(requestBody);

        if (!id) throw new Error('Could not update user, id is required.');
        const user = schema.db.users.findBy({ id });

        if (!user) throw new Error(`Could not find user with id: ${id}.`);
        return schema.users.find(id).destroy();
      });

      /* Deleting all the inactive users. */
      server.post('/users/delete-inactive', (schema) => {
        const users = schema.db.users.where({ active: false });

        if (!users.length)
          throw new Error('Could not find any inactive users.');

        return users.map((user) => {
          const { id } = user;
          return schema.users.find(id).destroy();
        });
      });
    },
  });
};
