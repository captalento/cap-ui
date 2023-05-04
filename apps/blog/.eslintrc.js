module.exports = {
  root: true,
  extends: ["custom", "next"],
  env: {
    "CONTENTFUL_SPACE": process.env.CONTENTFUL_SPACE
  }
};
