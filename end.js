const PunteggioFinale =document.getElementById('PunteggioFinale');
const PunteggioRecente=localStorage.getItem('PunteggioRecente');

PunteggioFinale.innerText=PunteggioRecente;
