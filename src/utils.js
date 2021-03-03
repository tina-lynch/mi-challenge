// /**
//  *
//  * @param {number} time - Unix time in seconds returns it in miliseconds
//  */
// export function convertDate(time) {
//   return time * 1000;
// }


const dateToday = () => {
  let today = new Date();
  let dd = (today.getDate() < 10 ? '0' : '') + today.getDate();
  let mm = (today.getMonth()+1 < 10 ? '0': '') + (today.getMonth()+1);
  today = mm+'/'+dd+'/'+(today.getFullYear())

  return today;
}


const dayString = (dayIndex) => ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",][dayIndex] || '';



exports.dateToday = dateToday;
exports.dayString = dayString;