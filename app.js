const names = document.getElementById('name');
const note1 = document.getElementById('note1');
const note2 = document.getElementById('note2');
const note3 = document.getElementById('note3');
const btnCalculate = document.getElementById('btn-calculate');
const mesege = document.getElementById('result');
const btnPredict = document.getElementById('btn-predict');

btnCalculate.addEventListener('click', calcurenote);
btnPredict.addEventListener('click', predecir);


function calcurenote(event){
    event.preventDefault(); 

    let nameuser = names.value;
    let note1Value = Number(note1.value);
    let note2Value = Number(note2.value);
    let note3Value = Number(note3.value);

    let results = (note1Value * 0.3) + (note2Value * 0.3) + (note3Value * 0.4);

  if (results <3.50) {
 mesege.style.color='black'
    mesege.textContent = `Señorita ${nameuser}, perdió la materia con ${results.toFixed(2)} `; 
}
if (results >=3.5 & results <4.5) {
 mesege.style.color='orange'
    mesege.textContent = `Señorita ${nameuser}, ganó la materia con ${results.toFixed(2)} `; 
}
if (results >4.5) {
 mesege.style.color='green'
    mesege.textContent = `Señorita ${nameuser}, su nota es sobresaliente con${results.toFixed(2)}`; 
}


  }  
   

function predecir (event){
    event.preventDefault(event); 
    
        let nota1 = Number(note1.value);
        let nota2 = Number(note2.value);
    
        let requiredNote3 = (3.5 - (nota1 * 0.3 + nota2 * 0.3)) / 0.4;
    
        note3.value = Math.max(0, requiredNote3).toFixed(2); 
     
    }

   