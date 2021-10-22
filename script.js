let values = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
let haveIt1 = [],
  haveIt = [];

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
    setTimeout(result(), 5000);
  } else {
    alert('No Credit !!');
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.getElementById('btnClear').addEventListener('click', () => clear());

function clear() {
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
}

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

function result() {
  let tmp, tmp1;
  if (creditH === 0 && creditC === 0) {
    // console.log(haveIt1.sort(), haveIt.sort());
    if (haveIt1.includes(0) && haveIt1.includes(1) && haveIt1.includes(2))
      tmp = true;
    else if (haveIt1.includes(3) && haveIt1.includes(4) && haveIt1.includes(5))
      tmp = true;
    else if (haveIt1.includes(6) && haveIt1.includes(7) && haveIt1.includes(8))
      tmp = true;
    else if (haveIt1.includes(0) && haveIt1.includes(3) && haveIt1.includes(6))
      tmp = true;
    else if (haveIt1.includes(1) && haveIt1.includes(4) && haveIt1.includes(7))
      tmp = true;
    else if (haveIt1.includes(2) && haveIt1.includes(5) && haveIt1.includes(8))
      tmp = true;
    else if (haveIt1.includes(0) && haveIt1.includes(4) && haveIt1.includes(8))
      tmp = true;
    else if (haveIt1.includes(2) && haveIt1.includes(4) && haveIt1.includes(6))
      tmp = true;
    else tmp = false;

    if (haveIt.includes(0) && haveIt.includes(1) && haveIt.includes(2))
      tmp1 = true;
    else if (haveIt.includes(3) && haveIt.includes(4) && haveIt.includes(5))
      tmp1 = true;
    else if (haveIt.includes(6) && haveIt.includes(7) && haveIt.includes(8))
      tmp1 = true;
    else if (haveIt.includes(0) && haveIt.includes(3) && haveIt.includes(6))
      tmp1 = true;
    else if (haveIt.includes(1) && haveIt.includes(4) && haveIt.includes(7))
      tmp1 = true;
    else if (haveIt.includes(2) && haveIt.includes(5) && haveIt.includes(8))
      tmp1 = true;
    else if (haveIt.includes(0) && haveIt.includes(4) && haveIt.includes(8))
      tmp1 = true;
    else if (haveIt.includes(2) && haveIt.includes(4) && haveIt.includes(6))
      tmp1 = true;
    else tmp1 = false;

    if (tmp === tmp1) {
      alert('TIE');
    } else if (tmp === true && tmp1 === false) {
      alert('You Win');
    } else {
      alert('You Lose');
    }
  }
  console.log(result);
}
