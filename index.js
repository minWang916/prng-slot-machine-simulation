'use strict';

let values = ['😀', '😁', '😂', '🤣', '😄', '😅', '😆', '😉', '😋'];

let valueOne = document.getElementById('value-one');
let valueTwo = document.getElementById('value-two');
let valueThree = document.getElementById('value-three');
let result = document.getElementById('result');
const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', spinValues);

let round = 0;
let seed1 = 1;
let seed2 = 2;
let seed3 = 3;

let seed1t = 1;
let seed2t = 3;
let seed3t = 0;

let m = 9;

function lcg(a,c,seed,name="Optional") {
 
  seed = (a * seed + c) % m;	
  return seed;
}



function spinValues() {
  playBtn.disabled = true;
  const attempts = 3;
  round = round + 1;
  let initValue_one = 0,
    initValue_two = 0,
    initValue_three = 0;

  let slotOne = setInterval(() => {
	seed1t = lcg(2,0,seed1t);
    valueOne.innerHTML = values[seed1t];
    initValue_one++;

    if (initValue_one == attempts) {
      clearInterval(slotOne);
      return null;
    }
  }, 100);

  let slotTwo = setInterval(() => {
	seed2t = lcg(5,2,seed2);
    valueTwo.innerHTML = values[seed2t];
    initValue_two++;

    if (initValue_two == attempts) {
      clearInterval(slotTwo);
      return null;
    }
  }, 100);

  let slotThree = setInterval(() => {
	seed3t = lcg(4,1,seed3);
    valueThree.innerHTML = values[seed3t];
    initValue_three++;

    if (initValue_three == attempts) {
      clearInterval(slotThree);
	  console.log("Round "+round+": Seed 1: "+seed1t + " Seed 2: " + seed2t + " Seed 3: "+seed3t);
      victory();
      playBtn.disabled = false;
      return null;
    }
  }, 100);



  seed1 = lcg(4,1,seed1,"Seed 1:");
  seed2 = lcg(5,2,seed2,"Seed 2:");
  seed3 = lcg(7,1,seed3,"Seed 3:");
  
  valueOne.innerHTML = values[seed1];  
  valueTwo.innerHTML = values[seed2];
  valueThree.innerHTML = values[seed3];
  
  
  function victory() {
    slotOne = valueOne.innerHTML;
    slotTwo = valueTwo.innerHTML;
    slotThree = valueThree.innerHTML;
	

    if (slotOne == slotTwo && slotTwo == slotThree) {
      result.innerHTML = 'Victory 🏆';
    } else {
      result.innerHTML = 'Try again!';
    }
  }
}

