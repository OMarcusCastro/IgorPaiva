let raceNumber = Math.floor(Math.random() * 1000);
let runRegistred = true;
let runnerAge = 18;
if (runnerAge > 18 && runRegistred) {
  raceNumber = receNumber + 1000;
} 
if (runRegistred && runRegistred > 18) {
  console.log(`the race will starts at 9:30am with & ${raceNumber}`);
} else if (runnerAge > 18 && runRegistred === false){
  console.log(`the late race will starts at 11:00am with & ${raceNumber}`);
}else if  (runnerAge < 18 ){
  console.log(`the race for young will starts at 12:30pm with && ${raceNumber}`)
} 

