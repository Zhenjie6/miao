var jackyen96 = {
  compact(ary) {
    return ary.filter(item => item);
  },

  fill(array, value, start = 0, end = array.length) {
    let result = new Array(array)
    if(start >= end)
      return result
    for(let i = start; i < end; i++) {
      array[i] = value
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
   * @param ary{Array} 需要拆分的数组
   * @param size{Number} 拆分的单位大小
   * @returns {Array} 拆分后组成的新数组
   */
  chunk(ary, size) {
    let result = new Array()
    for(let i = 0; i <= ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  },

  /**
   * @description 把数组和新的内容链接起来
   * @param array {Array}: The array to concatenate.
   * @param values {...*}: The values to concatenate.
   */
  concat(array, values) {
    let result = array.slice(0)
    for(let arg in arguments) {
      if(typeof arg === Array) {
        let ary = new Array()
        for(let i = 0; i < arg.length; i++) {
          ary.push(arg[i])
        }
        result.push(ary)
        continue
      }
      result.push(arg)
    }
    return result
  },
  difference(array, value = []) {
    let result = new Array()
    let map = {}
    for(let item in value) {
      if(map[item])
        continue
      map[item] = true
    }
    for(let i = 0; i < array.length; i++) {
      if(map[array[i]])
        continue
      result.push(array[i])
    }
    return result
  },
  // drop,
  // fill,
  // find,
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