import { parseFetchResponse } from 'util/parse-fetch-response/parse-fetch-response';

export const getUsers = async () => {
  const response = await fetch('/api/users');
  const parsedResponse = await parseFetchResponse(response);

  return parsedResponse.users;
};

export const addUser = async ({ name, active }) => {
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ name, active }),
  });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse.user;
};
