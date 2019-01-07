export function findJanFirst(year) {
    const leapYears = [];
    let y = 2004;
    let janFirst = 4;
    while (y < year) {
      leapYears.push(y);
      y += 4;
    }
    const leap_4 = leapYears.filter(y => y % 4 === 0).length;
    const leap_100 = leapYears.filter(y => y % 100 === 0).length;
    const leap_400 = leapYears.filter(y => y % 400 === 0).length;
    const leapDay = leap_4 - leap_100 + leap_400;
    const years = year - 2004;
    return (janFirst + leapDay + years) % 7;
  }
export function isLeapYear(year) {
    let ans = false;
    if (year % 4 === 0) {
      ans = true;
    } else if (year % 100 === 0) {
      ans = false;
    } else if (year % 400 === 0) {
      ans = true;
    }
    return ans;
  }
  export function monDay(year) {
    const monDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(year)) {
      monDays[2-1] = 29;
    }
    return monDays;
  }
  export function findMonFirst(year, month) {
    const JanFirst = findJanFirst(year);
    const monDays = monDay(year);
    let totalDay = JanFirst;
    for (let i = 0; i < month - 1; i++) {
      totalDay += monDays[i];
    }
    return totalDay % 7;
  }
  export function daysArray(year, month) {
    const monDays = monDay(year);
    const daysArray = [];
    for (let i = 1; i <= monDays[month - 1]; i++) {
      daysArray.push(i);
    }
    return daysArray
  }