function wildcarMatch(wild, str){
  var reStr = wild.replace(/(?=[^\s\w])(?![?*])/g, '\\')
  .replace(/\?/g, '.')
  .replace(/\*/g, '.*')
  var re = new RegExp('^' + reStr + '$')
  return re.test(str)
}