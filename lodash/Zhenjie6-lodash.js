var zhenjie6 = {
  compact: function(ary){
    return ary.filter(item => item);
  },

  slice: function(ary, start, end){
    let length = ary == null ? 0 : ary.length;
    if( !length ){
      return [];
    }
    start = start == undefined ? 0 : start;
    end = end === undefined ? length : end;
    if(start < 0){
      start = -start > length ? 0 : length + start;
    }
    if(end < 0){
      end = -end > length ? length : length + end;
    }
    length = start < end ? end - start : 0;
    if(length == 0)
    return [];
    let result = new Array(length);
    while(++start < end){
      result[start] = ary[start];
    }
  },

  fill: function(array, value, [start = 0], [end = array.length]){
    if(start >= end)
    return array
    for(let i = start; i < end; i++){
      array[i] = value
    }
  }


}