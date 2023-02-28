const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
    return 'ERROR : Invalid input provided.';
  }

  const diffYear = d1.getFullYear() - d2.getFullYear();
  const diffMonth = d1.getMonth() - d2.getMonth();

  let output = 'Time elapsed: ';
  if (diffYear > 0) {
    output += `${diffYear} year${diffYear > 1 ? 's' : ''}, `;
  }
  output += `${diffMonth} month${diffMonth > 1 ? 's' : ''}`;
  return output;
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, 'May 1, 1995'));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, '1975-8-11'));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, 'birthdate'));
// Error: Invalid input provided.
