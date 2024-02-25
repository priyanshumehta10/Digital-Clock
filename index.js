const clock =  document.querySelector("#clock")


console.log();

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString(); 
}, 1000);