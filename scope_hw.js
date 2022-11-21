// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

// Expected Result: Miss Scarlet as function declareMurderer simply references the murderer value within scenario


//   const murderer = 'Professor Plum';

//   const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
//   }
  
//   const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);

// Expected Result: ERROR as const murderer can't be reassigned.


// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// Expected Result: 
// First - Mrs. Peacock as murderer is reassigned within the function declareMurderer
// Second - Professor Plum as secondVerdict does not call the function declareMurderer


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Expected Resluts:

// Suspects are Miss Scarlet, Professor Plum, Colonel Mustard (suspectThree reassigned within the function)
// Suspect three is Mrs Peacock as the reassignment within the function is now out of scope

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// const changeWeapon = function(newWeapon) {
// scenario.weapon = newWeapon;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

 // Expected result:

 // The weapon is the Revolver (changeWeapon function called which can reassign the weapon value within the const variable)


//  let murderer = 'Colonel Mustard';

//  const changeMurderer = function() {
//    murderer = 'Mr. Green';
 
//    const plotTwist = function() {
//      murderer = 'Mrs. White';
//    }
 
//    plotTwist();
//  }
 
//  const declareMurderer = function () {
//    return `The murderer is ${murderer}.`;
//  }
 
//  changeMurderer();
//  const verdict = declareMurderer();
//  console.log(verdict);

// Expected Result:

// Mrs White as the plotTwist function is able to reassign murderer because it's within the changeMurderer function i.e. in scope.


// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//   const plotTwist = function() {
//       let murderer = 'Colonel Mustard';
      
      
//       const unexpectedOutcome = function() {
//           murderer = 'Miss Scarlet';
//         }
        
//         unexpectedOutcome();
//     }
    
//     plotTwist();
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// Expected Result:

// Mr Green 



// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

// NOPE!



  let murderer = 'Professor Plum';

  if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

// Expected Result:

// Professor Plum because if statement only changes the murderer within itself and not outside the code block