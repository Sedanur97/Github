function getAdvice(){
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.adviceslip.com/advice');
     
    request.onload = function() {
        var response = request.response;
        var jsonData = JSON.parse(response);
        var advice = jsonData.slip.advice;

        document.getElementById("advice").innerHTML = advice;
        
    };
   

    request.send();
    
}


getAdvice();
      

document.addEventListener('keyup', function (event) {
 
  
        var name = event.key;
        var code = event.code;

        if (name === 'Control') {
            // Do nothing.
            return;
        }

        if (event.ctrlKey) {
            alert(`Combination of ctrlKey + ${name} \n Key code Value: ${code}`);
        } 

        else {
            alert(`Key pressed ${name} \n Key code Value: ${code}`);
        }

    }, false);

  document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'Control') {
      alert('Control key released');
    }
    getAdvice();

  }, false);
        
  

