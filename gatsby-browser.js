/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

let injectedTwitterScript = false

const injectTwitterScript = () => {
  const twitterscript = document.createElement('script')
  twitterscript.src = 'https://platform.twitter.com/widgets.js'
  twitterscript.async = true
  twitterscript.id = 'twitter-wjs'
  document.getElementsByTagName(`head`)[0].appendChild(twitterscript)
}

exports.onClientEntry = () => {
  if (!injectedTwitterScript) {
    injectTwitterScript()
    injectedTwitterScript = true
  }

  if (
    typeof twttr !== 'undefined' &&
    window.twttr.widgets &&
    typeof window.twttr.widgets.load === 'function'
  ) {
    window.twttr.widgets.load()
  }
}
