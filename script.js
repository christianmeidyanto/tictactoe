let values = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
let haveIt1 = [];

let creditH = 3;
let creditC = 3;
function addX(index, box) {
  if (!haveIt1.includes(index)) {
    haveIt1.push(index);
    if (creditH > 0) {
      values[index] = 'X';
      creditH -= 1;
      document.getElementById(box).innerHTML = 'X';

      generateUniqueRandom(8);

      console.log('Unique random numbers:', haveIt1);
      console.log('Unique random numbers:', haveIt);
    } else {
      alert('No Credit !!');
    }
  } else {
    alert('Pilih Kotak Lain !!');
  }
}

function addO(index, box) {
  if (creditC > 0) {
    values[index] = 'O';
    creditC -= 1;
    document.getElementById(box).innerHTML = 'O';
    // console.log(values, creditC);
  } else {
    alert('No Credit !!');
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.getElementById('btnClear').addEventListener('click', () => {
  let i = 0;
  let str1 = 'b';
  while (i < 8) {
    values[i] = '';
    i++;
  }
  haveIt = [];
  haveIt1 = [];
  creditH = 3;
  creditC = 3;
  document.getElementById('b1').innerHTML = '';
  document.getElementById('b2').innerHTML = '';
  document.getElementById('b3').innerHTML = '';
  document.getElementById('b4').innerHTML = '';
  document.getElementById('b5').innerHTML = '';
  document.getElementById('b6').innerHTML = '';
  document.getElementById('b7').innerHTML = '';
  document.getElementById('b8').innerHTML = '';
  document.getElementById('b9').innerHTML = '';
});

let haveIt = [];

function generateUniqueRandom(maxNr) {
  //Generate random number
  let random = (Math.random() * maxNr).toFixed();

  //Coerce to number by boxing
  random = Number(random);

  if (!haveIt.includes(random) && !haveIt1.includes(random)) {
    haveIt.push(random);
    let boxnumber = 'b'.concat(random + 1);
    console.log(boxnumber);
    setTimeout(addO(random, boxnumber), 10000);
    return random;
  } else {
    if (haveIt.length < maxNr) {
      //Recursively generate number
      return generateUniqueRandom(maxNr);
    } else {
      console.log('No more numbers available.');
      return false;
    }
  }
}
