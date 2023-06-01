const team1 = document.querySelector(".team-akash")
const para =  document.querySelector(".team-para")
const head = document.querySelector(".team-name")

team1.addEventListener("mouseover",() =>{
    console.log("123");
    para.innerHTML = "Tech Team Lead";
    head.innerText = "Akash Kumar Verma";
}, false);
team1.addEventListener("mouseout",() =>{
    console.log("agfg");
    para.innerHTML = "Lead";
    head.innerText = "Akash";
}, false);


 function func () {
    console.log("123");
    para.innerHTML = "Tech Team Lead";
    head.innerText = "Akash Kumar Verma";
} ;