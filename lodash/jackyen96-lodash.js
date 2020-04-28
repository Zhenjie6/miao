var jackyen96 = {
  compact: function(ary){
    return ary.filter(item => item);
  },

  fill: function(array, value, start = 0, end = array.length){
    if(start >= end)
    return array
    for(let i = start; i < end; i++){
      array[i] = value
    }
  },

  isNull(val){
    return val === null ? true : false
  },


}