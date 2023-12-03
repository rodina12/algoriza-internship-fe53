import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){
document.getElementById("btnClose").addEventListener('click',()=>{
  document.getElementById('details').classList.add("d-none")
 document.getElementById('games').classList.remove("d-none")

 });
 this.loading =document.querySelector('.sk-cube-grid')
this.getDetails(id);
}

async getDetails(id){
  this.loading.classList.remove('d-none');
  const options={
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a420b93c2msh9e7f4dd9a40e234p10a532jsn690c8794bd16',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
        }
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
         const response = await api.json();
         this.loading.classList.add('d-none')
            console.log(response);
new Ui().displayDetails(response);
}
}