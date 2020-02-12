let teamJohn = {
    
  score1: 89,
  score2: 120,
  score3: 103
  
// score1: 99,
// score2: 120,
// score3: 140
};

let teamMike = {
 
  score1: 116,
  score2: 94,
  score3: 123
};

let teamMary = {
 
    score1: 97,
    score2: 134,
    score3: 105
};
  
let averageScore = () => {

    let johnAverage = (teamJohn.score1 + teamJohn.score2 + teamJohn.score3) / 3;

    let mikeAverage = (teamMike.score1 + teamMike.score2 + teamMike.score3) / 3;
    
    let maryAverage = (teamMary.score1 + teamMary.score2 + teamMary.score3) / 3;

    ((johnAverage > mikeAverage) && (johnAverage > maryAverage)) ? console.log("Winner is Team John and score is ", johnAverage)
       : ((johnAverage < mikeAverage) && (maryAverage < mikeAverage)) ? console.log("Winner is Team Mike and average score is", mikeAverage)
       : ((maryAverage > mikeAverage) && (maryAverage > johnAverage)) ? console.log("Winner is Team Mary and average score is", maryAverage)
            : console.log("Match is Draw");  
    
};

averageScore();