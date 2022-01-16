let weightMark=78, heightMark=1.69;
let weightJohn=92, heightJohn=1.95;

const calculateBMI = (mass, height) => mass/(height*height);
const bmiMark = calculateBMI(weightMark, heightMark);
const bmiJohn = calculateBMI(weightJohn, heightJohn);

if(bmiJohn > bmiMark){
    alert(`John(${bmiJohn}) has greater BMI than Mark(${bmiMark})`);
}
else{
    alert(`Mark(${bmiMark.toFixed(2)}) has greater BMI than John(${bmiJohn.toFixed(2)})`);
}