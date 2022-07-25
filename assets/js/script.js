var today = moment().format("l");
$("#todays-date").text(today);
console.log(today);

var todayPlusOne = moment().add(1, 'days').format("l");
$("#today-plus-one").text(todayPlusOne);
console.log(todayPlusOne);

var todayPlusTwo = moment().add(2, 'days').format("l");
$("#today-plus-two").text(todayPlusTwo);
console.log(todayPlusTwo);

var todayPlusThree = moment().add(3, 'days').format("l");
$("#today-plus-three").text(todayPlusThree);
console.log(todayPlusThree);

var todayPlusFour = moment().add(4, 'days').format("l");
$("#today-plus-four").text(todayPlusFour);
console.log(todayPlusFour);

var todayPlusFive = moment().add(5, 'days').format("l");
$("#today-plus-five").text(todayPlusFive);
console.log(todayPlusFive);