module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  env: {
    "CONTENTFUL_SPACE": process.env.CONTENTFUL_SPACE,
    "CONTENTFUL_ACCESS_TOKEN": process.env.CONTENTFUL_ACCESS_TOKEN,
    "CONTENTFUL_ENVIRONMENT": process.env.CONTENTFUL_ENVIRONMENT,
  }
};
