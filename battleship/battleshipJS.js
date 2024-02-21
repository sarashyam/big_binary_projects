function getRandomColour() {
    const colours = ["#FAFC6F", "#D4F08E", "#FD99EE"];
    const randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
  }
  
  let gridItem = document.querySelector(".grid-container")
  for(let i = 0;i<16;i++){
    let g =  document.createElement("button");
  
    gridItem.appendChild(g);
    g.style.cssText = "background-color :hsl(261, 50%, 32%)";
  
  
  }
  
  
  let countClick = 0;
  let pinkColorCount = 0;
  
  gridItem.addEventListener("click",(event)=>{ 
    color = getRandomColour()
    event.target.style.backgroundColor= color;
    countClick++;
    console.log(`countClick is ${countClick}`);
    console.log()
    if(color == "#FD99EE"){
      pinkColorCount++;
      console.log(`pinkColorCount is ${pinkColorCount}`)
    } 
    if(countClick <= 8 && pinkColorCount>=5){
      alert('you won the game');
      console.log('you won the game');
    }
    else if (countClick > 8 && pinkColorCount<=5){
      alert("you lose")
      console.log("you lose")
    }
    });
  
  
  let reset = document.querySelector(".resetButton"); 
  let gridChildren = gridItem.children;
  
  reset.addEventListener("click", () => {
   for(let child of gridChildren){
    
    child.style.cssText = "background-color :hsl(261, 41%, 32%)";
    countClick = 0;
    pinkColorCount = 0;
   }
   console.log(`click count${countClick} pink count ${pinkColorCount}`)
  });
  
  
  
  