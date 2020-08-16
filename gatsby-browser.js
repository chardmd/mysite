"use strict";

exports.onInitialClientRender = () => {
  window.___GATSBY_INITIAL_RENDER_COMPLETE = true;
};

require("./src/styles/init.scss");
