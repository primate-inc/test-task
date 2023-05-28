function deepMapSearch(obj) {
  let map = []

  Object.entries(obj).forEach(entry => {
    const [k,v] = entry

    if (typeof(v) == 'object') {
      map.push(`"${k}": ${deepMapSearch(v)}`)
    } else {
      map.push(`"${k}": ${v}`)
    }
  })

  return `(${map.join(', ')})`
}

export default deepMapSearch;
