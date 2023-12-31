const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async (config) => {
  const url = process.env.UI_API_URL;

  const response = await EleventyFetch(url, {
    duration: '0s',
    type: 'json',
  });

  return response;
};
