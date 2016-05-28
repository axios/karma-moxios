var path = require('path')

function createPattern(file) {
  return {pattern: file, included: true, served: true, watched: false}
}

function initMoxios(files) {
  files.unshift(createPattern(require.resolve('moxios')))
}

initMoxios.$inject = ['config.files']

module.exports = {
  'framework:moxios': ['factory', initMoxios]
}
