module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist:  [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version",
          "last 1 ie version",
          'iOS >= 6',
          'Android >= 4.0'
      ]
    }
  }
}