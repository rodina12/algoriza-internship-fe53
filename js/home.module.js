import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home{
    constructor(){
        document.querySelectorAll(".nav-link").forEach((link)=>{
            link.addEventListener("click",()=>{
               
             this.changeActiveLink(link);
             const category = link.dataset.category;
             this.getGames(category)
            });
        });
this.loading =document.querySelector('.sk-cube-grid')
this.detailsdata =document.getElementById('details')
this.games = document.getElementById('games')

this.ui =new Ui();

        this.getGames("MMORPG")
    }


    changeActiveLink(link){

        document.querySelector(".navbar-nav .active").classList.remove("active");
        link.classList.add('active')
       
    
    }
   
        async getGames(cat){
this.loading.classList.remove('d-none');
            const options={  method :'GET',
            headers: {
                "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                Accept: "application/json",
                "Content-Type": "application/json",
             },
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
         const response = await api.json();
         this.loading.classList.add('d-none')
            console.log(response);
           
            this.ui.displayDataGame(response)
         
            document.querySelectorAll(".card").forEach((card)=>{
                card.addEventListener("click",()=>{
                    this.games.classList.add("d-none")
                    this.detailsdata.classList.remove("d-none")
                
                     new Details(card.dataset.id);   
                    
                });
            });
        }
    }

