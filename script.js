//added additional variables for future use

function checkTimer() {
    var durationS = document.form.s.value;
    
    var stop = document.getElementById('button2');
    var reset = document.getElementById('button3');
    var running = false;
    var startTime; 
    var elapsedSeconds = document.getElementById("seconds");
    let stopClicked = false;
    
    
    if (durationS === '') {
        alert('Please enter a value in the box to set the timer!');
        
    }
    else {
    
    running = true;
    
    startTime = new Date().getTime();
    
    stop.onclick = function() {
        clearInterval(timerS);
    }
    stop.addEventListener('click', ()=> {
        stopClicked != stopClicked;
    })

    reset.onclick = function() {
        clearInterval(timerS);

        elapsedSeconds.innerHTML = '00';
    }
    
    var timerS = setInterval(function() {
        var totalTime = (new Date().getTime() - startTime) / 1000;
            if (totalTime < durationS) {
                elapsedSeconds.innerHTML = Math.abs((totalTime - durationS).toFixed(0));
                
                if (elapsedSeconds.innerHTML < 10) {
                    elapsedSeconds.innerHTML = '0' + Math.abs((totalTime - durationS).toFixed(0));
                }
            }
            else {
                running = false;
                clearInterval(timerS);
                alert('Timer finished!');
            } 
            
        }, 1);
    }
}