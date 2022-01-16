let averageScoreKoala, averageScoreDolphins;

const calAvgScore = (scoreOne, scoreTwo, scoreThree) => (scoreOne+scoreTwo+scoreThree)/3 ;

averageScoreDolphins = calAvgScore(97, 112, 101);
averageScoreKoala = calAvgScore( 109, 95, 123);

if( averageScoreKoala > averageScoreDolphins && averageScoreKoala >= 100){
    console.log("Koalas Win");
}
else if( averageScoreDolphins > averageScoreKoala && averageScoreDolphins >= 100){
    console.log("Dolphins Win")
}
else{
    if( averageScoreKoala >= 100 && averageScoreDolphins >= 100){
        console.log("Match is Drawn")
    }
    else{
        console.log("Score is less than 100")
    }
    
}