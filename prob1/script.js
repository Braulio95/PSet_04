let itemslist = document.querySelector("#itemslist"); //Selecting the container for all pokemons
let urlapi = "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json";
let daily = document.querySelector(".day");
let monthly = document.querySelector(".month");
let state = "daily"

function Daily (){
    itemslist.innerHTML = "";
    state = "daily";
    showAll();
}
function Weekly (){
    itemslist.innerHTML = "";
    state = "weekly";
    showAll();
}
function Monthly(){
    itemslist.innerHTML = "";
    state = "monthly";
    showAll();
}
monthly.addEventListener("click",()=>{
    state="monthly"
});
       
function showAll(){
    //pokemonlist.innerHTML = ""; //In case that container has something we clear it hear
        for(let i=0; i<7; i++){ //This for loop interates 12 times and the values of i goes from 1 to 12, then this value is concatenated to the url in order to obtain a single pokemon
        fetch(urlapi)
            .then((res)=>res.json())
            .then((data)=>showActivity(data,i)) // here we execute the function show pokemon
        }
        }
                    
function showActivity(data,i){ 
    const div = document.createElement("div"); // we create a div element wich contains all the follow html code with the different values of the API
    div.classList.add("activity");
    if(state=="daily"){
        div.innerHTML = `
            <div class="activitybg ${data[i].title}">
                <div class="activityinfo">
                    <div class="activityname">
                        <p>${data[i].title}</p>
                        <p>...</p>
                    </div>
                    <div class="hourscurr">
                        ${data[i].timeframes.daily.current}
                    </div>
                    <div class="lasthour">
                        <p>Last Day - ${data[i].timeframes.daily.previous}</p>
                    </div>
                </div>
            </div>
            `;
        }
    if(state=="weekly"){
            div.innerHTML = `
                <div class="activitybg ${data[i].title}">
                    <div class="activityinfo">
                        <div class="activityname">
                            <p>${data[i].title}</p>
                            <p>...</p>
                        </div>
                        <div class="hourscurr">
                            ${data[i].timeframes.weekly.current}
                        </div>
                        <div class="lasthour">
                            <p>Last Week - ${data[i].timeframes.weekly.previous}</p>
                        </div>
                    </div>
                </div>
                `;
            }
    if(state=="monthly"){
                div.innerHTML = `
                    <div class="activitybg ${data[i].title}">
                        <div class="activityinfo">
                            <div class="activityname">
                                <p>${data[i].title}</p>
                                <p>...</p>
                            </div>
                            <div class="hourscurr">
                                ${data[i].timeframes.monthly.current}
                            </div>
                            <div class="lasthour">
                                <p>Last Month - ${data[i].timeframes.monthly.previous}</p>
                            </div>
                        </div>
                    </div>
                    `;
                }
        itemslist.append(div)
}
showAll();