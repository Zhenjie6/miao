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
      if(typeof arguments[idx] === Array) {
        let ary = new Array()
        for(let i = 0; i < arg.length; i++) {
          ary.push(arguments[idx][i])
        }
        result.push(ary)
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

  identity(_){
    return _
  },

  /**
   * 返回一个方法判断输入是否和source中对应的属性值相等
   * @param {Object} source 
   */
  matches(source){
    let result = function(obj){
      for(let arg in source){
        if(obj[arg] != source[arg])
        return false
        return true
      }
    }
    return result
  },

  matchesProperty(){

  },

  property(){

  },

  find(collection, predicate = this.identity, fromIndex = 0){
    
  },
  // first,
  // head,
  // flatten
  // indexOf
  // initial
  // intersection
  // join
  // last
  // lastIndexOf
  // nth
  // pull
  // pullAll
  // pullAt
  // remove
  // reverse
  // slice
  // sortedIndex
  // sortedIndexOf
  // tail
  // take
  // takeRight
  // union
  // uniq
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