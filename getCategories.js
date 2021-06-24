const axios = require('axios')

axios.get('https://data.cityofnewyork.us/resource/kpav-sd4t.json?$query=SELECT distinct(job_category)')
  .then((res) => {
    console.log(res.data)
    var ref = {}
    // loop over response
    for (var i = 0; i < res.data.length; i++) {
      if (res.data[i]["job_category_1"]) {
        // for each string at job_category
        // split by space
        var split = res.data[i].job_category_1.split(' ')
        // iterate over array
        console.log('split: ', split)
        for (var j = 0; j < split.length; j++) {
          // currentWord = current word split on comma, index 0
          // currentWord = c
          var current = (split[j][split[j].length - 1] === ',' ? split[j].substring(0, split[j].length - 1) : split[j])
          // if ref does not contain currentWord
          if (!ref[current]) {
            // ref at current word equals 1
            ref[current] = 1
          } else {
            // else, ref[currentWord] ++
            ref[current]++
          }
        }
      }
    }
    console.log(ref)
  })
  .catch((err) => {
    console.log('err!', err)
  })