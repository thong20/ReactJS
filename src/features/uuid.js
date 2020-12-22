export function showFullDate(){
  const now = new Date()
  const date = addZeroIfOne(now.getDate())
  const month = addZeroIfOne(now.getMonth() + 1)
  const year = now.getFullYear()

  const hours = addZeroIfOne(now.getHours())
  const minutes = addZeroIfOne(now.getMinutes())
  const seconds = addZeroIfOne(now.getSeconds())
  
  function addZeroIfOne(n){
    return `0${n}`.slice(-2)
  }

  return `${year}${month}${date}-${hours}${minutes}${seconds}`

}



