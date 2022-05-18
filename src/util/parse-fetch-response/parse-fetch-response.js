/**
 * It takes a response object and returns a promise that resolves to the response
 * body as a JSON object
 * @param [response] - The response object from the fetch request.
 * @returns A function that takes a response object as an argument and returns a
 * promise that resolves to an object.
 */
export const parseFetchResponse = async (response = {}) => {
  const { text } = response;

  const responseText = text ? await response.text() : '';
  if (responseText) return JSON.parse(responseText);

  return {};
};
