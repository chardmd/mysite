const path = require("path");

const createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: "/",
    component: path.resolve("./src/templates/home-template.js"),
  });

  createPage({
    path: "/career",
    component: path.resolve("./src/templates/career-template.js"),
  });

  createPage({
    path: "/toolbox",
    component: path.resolve("./src/templates/toolbox-template.js"),
  });

  createPage({
    path: "/contact",
    component: path.resolve("./src/templates/contact-template.js"),
  });

  // 404
  createPage({
    path: "/404",
    component: path.resolve("./src/templates/not-found-template.js"),
  });
};

module.exports = createPages;
