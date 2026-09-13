let count = 0; //time store
let timer = null; // set inteval id
let isRunning = false ; // run or not

 let stopbtn = document.getElementById("stoped");

function updating() {
   let minutes = Math.floor(count / 60);
    let seconds = count % 60;

    minutes.toString().padStart(2, "0") ;
    seconds.toString().padStart(2, "0");

    let total =`${minutes} : ${seconds}`


    document.getElementById("demo").textContent = total;

    let message = document.getElementById("message");

        
    if (count === 0 ) {
        message.textContent = "Timer is ended now";
        message.style.color = "red";
    } else {
        message.textContent = "";
    }

}

function increament() {
    count +=60;
    updating();
}

function decreament() {
    if (count >=1) {
        count--;
    }
    updating();
}

function reset() {
    count = 0;
    updating();
}

function start() {
    if (!isRunning) {
        isRunning=true;
        timer= setInterval(()=>{
            count+=1;
         updating();
        },1000)
    }
}

function stop() {
   if (isRunning) {
     clearInterval(timer);
    isRunning = false;
    stopbtn.textContent="paused ";
 
   }else{
    isRunning=true;
      stopbtn.textContent="running ";
 
        timer = setInterval(() => {
            count++;
            updating();
        }, 1000);

   }
}

