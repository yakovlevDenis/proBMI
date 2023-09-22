
jackObj = {
   firstName: 'Джек',
   lastName: 'Уайт',
   weight: 79,
   height: 170,
   calcBMIj: function(){
      return this.bmi = ((this.weight / Math.pow(this.height, 2))*10000).toPrecision(2);      
   },
};

mikeObj = {
   firstName: 'Майк',
   lastName: 'Блек',
   weight: 91,
   height: 193,
   calcBMIm: function() {
      return this.bmi = ((this.weight / Math.pow(this.height, 2))*10000).toPrecision(2);
   },
};

document.write(`Давайте высчитаем Коэфециент Лишнего Веса (КЛВ).<br> У нас есть два участника:<br><br> - Джек Уайт: <br>вес - ${jackObj.weight} кг.;<br>рост - ${jackObj.height} см.;<br>КЛВ - ${jackObj.calcBMIj()};<br>- Майк Блек: <br>вес - ${mikeObj.weight} кг.;<br>рост - ${mikeObj.height} см.;<br>КЛВ - ${mikeObj.calcBMIm()};`);

let diff = jackObj.calcBMIj() - mikeObj.calcBMIm();

summarizing = function () {
   return `${jackObj.firstName} ${jackObj.lastName} имеет КЛВ ${jackObj.calcBMIj()} что является ${jackObj.calcBMIj()>mikeObj.calcBMIm() ? 'больше' : 'меньше'} чем у ${mikeObj.firstName} ${mikeObj.lastName} - ${mikeObj.calcBMIm()}, что на ${diff} ед. больше.`
};

document.write('<br>');
document.write('<br>');
document.write(summarizing());
console.log(summarizing());

