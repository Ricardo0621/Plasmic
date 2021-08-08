
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['rdBHDjzAyjou3ad6LR1wYo'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  