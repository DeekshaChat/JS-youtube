  const myDate = new Date();

//   console.log(myDate);
//   console.log(myDate.toString());
//   console.log(myDate.toLocaleDateString());
//   console.log(typeof myDate);
  

const customDate = new Date(2024, 0, 24); // in numeric form month starts from 0 and in string it starts from 1, as shown in customDate2
//   console.log(customDate);
//   console.log(customDate.toString());
//   console.log(customDate.toLocaleDateString());
//   console.log(typeof customDate);

const customDate2 = new Date("2024-01-24");
console.log(customDate.toLocaleString());


console.log(customDate2.toLocaleString('default', {
    weekday: 'long'
}));


