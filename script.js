function checkSymptoms(){

let symptom = document.getElementById("symptomSelect").value;
let result = document.getElementById("result");
let doctorBtn = document.getElementById("doctorBtn");

doctorBtn.style.display = "block";

if(symptom === "headache"){

result.innerHTML = `
<h3>Possible Condition: Migraine</h3>
<p>Advice: Rest in a quiet quiet room and drink water.</p>
<p>Next Step: Visit a doctor if it continues.</p>
`;

}

else if(symptom === "fever"){

result.innerHTML = `
<h3>Possible Condition: Infection or Flu</h3>
<p>Advice: Drink fluids and get rest.</p>
<p>Next Step: See a doctor if fever lasts more than 3 days.</p>
`;

}

else if(symptom === "cough"){

result.innerHTML = `
<h3>Possible Condition: Cold or Respiratory Infection</h3>
<p>Advice: Drink warm fluids and rest.</p>
<p>Next Step: Visit a doctor if cough lasts more than a week.</p>
`;

}

else if(symptom === "chest pain"){

result.innerHTML = `
<h3>This symptom could be serious.</h3>
<p>Next Step: Seek medical help immediately.</p>
`;

}

else if(symptom === "fatigue"){

result.innerHTML = `
<h3>Stress</h3>
<p>Next Step: Get rest.</p>
`;

}

else if(symptom === "sore throat"){

result.innerHTML = `
<h3>Possible Condition: Infection or Flu</h3>
<p>Advice: Drink fluids and get rest.</p>
<p>Next Step: See a doctor if fever lasts more than 3 days.</p>
`;

}


else{

result.innerHTML = `
<p>Please select a symptom.</p>
`;

}

}

function findHospital(){

window.open("https://www.google.com/maps/search/hospital+near+me");

}