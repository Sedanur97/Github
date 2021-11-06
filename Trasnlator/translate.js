
//var request = new XMLHttpRequest();


const formData = new FormData(getAdvice);
  var res = "https://libretranslate.com/translate" ;
   method : "https://libretranslate.com/translate" ; 
   body: JSON.stringify(
	   {
		 q: "Hello!",
		 source : "english"  
		 
	   }
   ),
    myHeaders = new Headers();
   myHeaders.append('Content-Type', "application/json");
   
   var myInit = {
	 method: 'GET',
	 headers: myHeaders,
	 mode: 'cors',
	 cache: 'default'
   };
   
   var myRequest = new Request('flowers.jpg', myInit);
   
   myContentType = myRequest.headers.get('Content-Type')

   ;
   
  const request = new Request('https://libretranslate.com/translate', {
    method: "https://libretranslate.com/translate" ,
    body: formData
  });
  
  request.formData().then(function(data) {
    // do something with the formdata sent in the request
    getAdvice();
  });

