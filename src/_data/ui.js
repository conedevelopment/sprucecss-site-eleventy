const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async () => {
  const url = process.env.UI_API_URL;

  if (!url) {
    const data = [
      {
        title: 'Introduction',
        folder: 'getting-started',
        slug: 'introduction',
        order: 1,
        content: 'Etiam semper luctus nisi sodales commodo. Proin a diam ex. Quisque id arcu turpis. Proin a libero vel quam hendrerit tristique ut et justo.',
      },
      {
        title: 'Config',
        folder: 'getting-started',
        slug: 'config',
        order: 2,
        content: 'Donec commodo nibh at suscipit gravida. Suspendisse accumsan blandit velit id finibus. Morbi hendrerit mi id quam egestas, non pulvinar massa sollicitudin.',
      },
    ];

    return data;
  }

  const response = await EleventyFetch(url, {
    duration: '0s',
    type: 'json',
  });

  return response;
};
