import { parseFetchResponse } from 'util/parse-fetch-response/parse-fetch-response';

/**
 * It makes a request to the server, parses the response, and returns the users
 * @returns An array of users.
 */
export const getUsers = async () => {
  const response = await fetch('/api/users');
  const parsedResponse = await parseFetchResponse(response);

  return parsedResponse.users;
};

/**
 * It makes a POST request to the /api/users endpoint, and returns the user object
 * that was created
 * @returns The user object
 */
export const addUser = async ({ name, active }) => {
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ name, active }),
  });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse.user;
};

/**
 * It makes a PUT request to the /api/users endpoint with the id of the user to
 * update
 * @param id - The id of the user to update
 * @returns The response from the server.
 */
export const updateUserActive = async (id) => {
  const response = await fetch('/api/users', {
    method: 'PUT',
    body: JSON.stringify({ id }),
  });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

/**
 * It sends a DELETE request to the server with the id of the user to delete
 * @param id - The id of the user to delete.
 */
export const deleteUser = async (id) => {
  await fetch('/api/users', {
    method: 'DELETE',
    body: JSON.stringify({ id }),
  });
};

export const deleteInactiveUsers = async () => {
  const response = await fetch('/api/users/delete-inactive', {
    method: 'POST',
  });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse.users;
};
