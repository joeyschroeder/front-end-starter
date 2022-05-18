export const parseFetchResponse = async (response = {}) => {
  const { text } = response;

  const responseText = text ? await response.text() : '';
  if (responseText) return JSON.parse(responseText);

  return {};
};
