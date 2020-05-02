var jackyen96 = {
  compact(ary) {
    return ary.filter(item => item);
  },

  fill(array, value, start = 0, end = array.length) {
    let result = array.slice(0)
    if(start >= end)
      return result
    for(let i = start; i < end; i++) {
      result[i] = value
    }
    return result
  },

  isNull(val) {
    return val === null ? true : false
  },

  /**
   * @description Creates an array of elements split into groups the length of size.
   * If array can't be split evenly, the final chunk will be the remaining elements.
   * 
   * @param {Array} ary 需要拆分的数组
   * @param {Number} size 拆分的单位大小
   * @returns {Array} 拆分后组成的新数组
   */
  chunk(ary, size) {
    let result = new Array()
    for(let i = 0; i < ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  },

  /**
   * @description 把数组和新的内容链接起来
   * @param {Array} array : The array to concatenate.
   * @param {...*} values : The values to concatenate.
   */
  concat(array, values) {
    let result = array.slice(0)
    for(let idx = 1; idx < arguments.length; idx++) {
      if(arguments[idx].length) {
        for(let i = 0; i < arguments[idx].length; i++) {
          result.push(arguments[idx][i])
        }
        continue
      }
      result.push(arguments[idx])
    }
    return result
  },


  difference(array, ...values) {
    let result = new Array()
    let map = {}
    for(let j = 1; j < arguments.length; j++) {
      for(let i = 0; i < arguments[j].length; i++) {
        map[arguments[j][i]] = true
      }
    }
    for(let i = 0; i < array.length; i++) {
      if(map[array[i]])
        continue
      result.push(array[i])
    }
    return result
  },

  drop(array, n = 1) {
    if(n > array.length - 1)
      return []
    return array.slice(n)
  },

  identity(_) {
    return _
  },

  /**
   * 返回一个方法判断输入是否和source中对应的属性值相等
   * @param {Object} source 
   */
  matches(source) {
    let result = function (obj) {
      for(let arg in source) {
        if(obj[arg] != source[arg])
          return false
        return true
      }
    }
    return result
  },

  /**
   * 返回一个方法判断输入对象的path属性是否等于srcValue
   * @param {String} path 
   * @param {*} srcValue 
   */
  matchesProperty(path, srcValue) {
    return function (obj) {
      if(obj[path] == srcValue)
        return true
      return false
    }
  },

  property(path) {
    return function (obj) {
      return obj[path]
    }
  },

  find(collection, predicate = this.identity, fromIndex = 0) {
    if(typeof predicate == 'object' && !predicate.length)
      predicate = this.matches(predicate)
    if(typeof predicate == 'object' && predicate.length)
      predicate = this.matchesProperty(predicate[0], predicate[1])
    if(typeof predicate == 'string')
      predicate = this.property(predicate)
    for(let i = fromIndex; i < collection.length; i++) {
      if(predicate(collection[i]) == true)
        return collection[i]
    }
    return undefined
  },

  first(ary) {
    return ary[0]
  },

  head(ary) {
    return ary[0]
  },

  flatten(ary){
    let result = new Array()
    for(let i = 0; i < ary.length; i++){
      if(typeof ary[i] === 'object' && ary[i].length){
        for(let j = 0; j < ary[i].length; j++){
          result.push(ary[i][j]) 
        }
        continue
      }
      result.push(ary[i])
    }
    return result 
  },

  indexOf(ary, value, fromIndex = 0){
    for(let i = fromIndex; i < ary.length; i++){
      if(ary[i] == value || ((value !== value) && (ary[i] !== ary[i])))
      return i
    }
    return -1
  },

  initial(array){
    return array.slice(0,array.length - 1)
  },
  
  intersection(...ary){
    let map = {}
    for(let id in arguments[0]){
      map[arguments[0][id]] = true
    }
    let result = new Array()
    for(let i = 1; i < arguments.length; i++){
      for(let val in map){
        if(arguments[i].indexOf(+val) < 0)
        map[val] = false
      }
    }
    for(let val in map){
      if(map[val])
      result.push(+val)
    }
    return result
  },


  join(ary, seprater = ','){
    let result = ''
    for(let i in ary){
      result += (ary[i] + '' + seprater)
    }
    return result.slice(0, result.length - 1)
  },
  
  last(ary){
    return ary.slice(ary.length - 1)[0]
  },

  lastIndexOf(ary, value, fromIndex = ary.length - 1){
    let count = 0;
    for(let i = fromIndex; i >= 0; i--){
      if(ary[i] == value || ((value !== value) && (ary[i] !== ary[i])))
      return fromIndex - count
      count ++
    }
    return -1
  },
  
  nth(ary, n = 0){
    if(n < 0)
    return ary[ary.length + n]
    return ary[n]
  },
  
  pull(ary, ...values){
    let map = {}
    let result = new Array()
    for(let i = 1; i < arguments.length; i++){
      map[arguments[i]] = true
    }
    for(let i = 0; i < ary.length; i++){
      if(map[ary[i]])
      continue
      result.push(ary[i])
    }
    return result
  },

  pullAll(ary, values){
    let map = {}
    let result = new Array()
    for(let i = 0; i < values.length; i++){
      map[values[i]] = true
    }
    for(let i = 0; i < ary.length; i++){
      if(map[ary[i]])
      continue
      result.push(ary[i])
    }
    return result
  },

  pullAt(ary, idx){
    let offset = 0
    let result = []
    for(let id in idx){
      let pos = idx[id] - offset
      result.push(ary[pos])
      ary.splice(pos, 1)
      offset++
    }
    return result
  },

  remove(ary, predicate = this.identity){
    let result = []
    for(let i = 0; i < ary.length; i++){
      if(predicate(ary[i]) == true){
        result.push(ary[i])
        ary.splice(i, 1)
        i--
      }
    }
    return result
  },

  reverse(ary){
    return ary.reverse()
  },
  
  slice(ary, str, end){
    return ary.slice(str, end)
  },

  sortedIndex(ary, val){
    if(val <= ary[0])
    return 0
    if(val > ary[ary.length - 1])
    return ary.length - 1
    let l = 0
    let r = ary.length - 1
    let mid = 0
    while(l < r){
      mid = Math.floor((l + r) / 2)
      if(ary[mid] < val)
      l = mid + 1
      else
      h = mid - 1
    }
    return l
  },

  sortedIndexOf(ary, val){
    if(ary[0] == val)
    return 0
    if(ary[ary.length - 1] == val)
    return ary.length - 1
    let l = 0
    let r = ary.length -1
    let mid
    while(l < r){
      mid = Math.floor((l + r) / 2)
      if(ary[mid] < val)
      l = mid + 1
      else
      r = mid - 1
    }
    return l
  },
  
  tail(ary){
    return ary.slice(1)
  },

  take(ary, n = 1){
    if(n == 0)
    return []
    return ary.slice(0, n)
  },
  
  takeRight(ary, n = 1){
    if(n == 0)
    return []
    return ary.slice(ary.length - n)
  },

  union(...arys){
    let result = arguments[0]
    for(let i = 1; i < arguments.length; i++){
      for(let j in arguments[i]){
        if(result.indexOf(arguments[i][j]) == -1)
        result.push(arguments[i][j])
      }
    }
    return result
  },
  
  uniq(){
    
  },


  // unzip
  // without
  // xor
  // zip
  // zipObject
  // includes
  // sample
  // sampleSize
  // shuffle
  // size
  // eq,gt,gte
  // lt,lte
  // add,ceil
  // divide
  // floor
  // max
  // mean
  // min
  // multiply
  // round
  // substract
  // sum
  // at
  // defaults
  // get
  // set
  // has
  // hasIn
  // invert
  // keys
  // assign
  // omit
  // pick
  // values
  // camelCase
  // capitalize
  // deburr
  // endsWith
  // escape
  // kebabCase
  // lowerCase
  // lowerFirst
  // pad
  // padEnd
  // padStart
  // parseInt
  // repeat
  // replace
  // snakeCase
  // split
  // startCase
  // startsWith
  // trim
  // trimEnd
  // trimStart
  // truncate
  // unescape
  // upperCase
  // upperFirst
  // words
  // range
}