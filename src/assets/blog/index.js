const files = require.context('./', false, /(\.js$|\.json$)/)
const modules = {}
files.keys().forEach((key) => {
  if (key === './index.js') return
  if (key.search(/\.js$/g) !== -1){
    modules[ files(key).default.Title ] = files(key).default
  }
  else if (key.search(/\.json$/g) !== -1){
    modules[ files(key).Title ] = files(key)
  }
})
export default modules