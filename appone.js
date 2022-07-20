var translateklingon = document.querySelector("#translateklingon");
var translatevulcan = document.querySelector("#translatevulcan");
var translateromulan = document.querySelector("#translateromulan");
var inputtext = document.querySelector("#input");
var outputtext = document.querySelector("#output");

var serverURLKlingon = "https://api.funtranslations.com/translate/klingon.json";
var serverURLVulcan = "https://api.funtranslations.com/translate/vulcan.json";
var serverURLRomulan = "https://api.funtranslations.com/translate/romulan.json";

function errorHandler(error){
    console.log("Error occured", error);
    alert("Try later- server down");
}


function clickHandlerKlingon(){
    var inputtext1 = inputtext.value;
  
    
        fetch(getTranslationKlingon(inputtext1))
        .then(response =>response.json())
        .then(json =>{
            var translatedtext = json.contents.translated;
             outputtext.innerText = translatedtext;
        })
        .catch(errorHandler)
    
    };
function clickHandlerVulcan(){
        var inputtext1 = inputtext.value;
      
        
            fetch(getTranslationVulcan(inputtext1))
            .then(response =>response.json())
            .then(json =>{
                var translatedtext = json.contents.translated;
                 outputtext.innerText = translatedtext;
            })
            .catch(errorHandler)
        
        };
function clickHandlerRomulan(){
        var inputtext1 = inputtext.value;
          
            
            fetch(getTranslationRomulan(inputtext1))
            .then(response =>response.json())
            .then(json =>{
                 var translatedtext = json.contents.translated;
                 outputtext.innerText = translatedtext;
            })
                .catch(errorHandler)
            
            };

function getTranslationKlingon(text){
    return serverURLKlingon+"?"+"text="+text;
}
function getTranslationVulcan(text){
    return serverURLVulcan+"?"+"text="+text;
}
function getTranslationRomulan(text){
    return serverURLRomulan+"?"+"text="+text;
}



translateklingon.addEventListener("click", clickHandlerKlingon)
translatevulcan.addEventListener("click", clickHandlerVulcan)
translateromulan.addEventListener("click", clickHandlerRomulan)
