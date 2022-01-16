const calcAverage = (scoreA, scoreB, scoreC) => {
    return (scoreA+scoreB+scoreC)/3
}

const checkWinner = (averageDolphinScore, averageKoalasScore) => (averageDolphinScore >= 2*averageKoalasScore ? printWinner('Dolpins') : printWinner('Koalas'))
const printWinner = (winnerTeamName) => console.log(winnerTeamName + ' wins')
const averageDolphinScore = calcAverage(85, 54, 41)
const averageKoalasScore = calcAverage(23, 34, 27)

checkWinner(averageDolphinScore, averageKoalasScore);
