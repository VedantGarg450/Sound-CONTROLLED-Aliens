function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/OGJJXLBLm/model.json", ModelLoaded)
}

function ModelLoaded(){
    console.log("Model Loaded Successfully")
    Classifier.classify(GotResult)
}
function GotResult(error, result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById("noise").innerHTML= result[0].label;
        document.getElementById("confidence").innerHTML= (result[0].confidence*100).toFixed(2)+"%";
        if(result[0].label=="Background Noise"){
            document.getElementById("A1").src="aliens-01.gif"
            document.getElementById("A2").src="aliens-02.png"
            document.getElementById("A3").src="aliens-03.png"
            document.getElementById("A4").src="aliens-04.png"
        }
        else if(result[0].label=="Clapping"){
            document.getElementById("A1").src="aliens-01.png"
            document.getElementById("A2").src="aliens-02.gif"
            document.getElementById("A3").src="aliens-03.png"
            document.getElementById("A4").src="aliens-04.png"
        }
        else if(result[0].label=="Drumming/Banging"){
            document.getElementById("A1").src="aliens-01.png"
            document.getElementById("A2").src="aliens-02.png"
            document.getElementById("A3").src="aliens-03.gif"
            document.getElementById("A4").src="aliens-04.png"
        }
        else if(result[0].label=="Whistling"){
            document.getElementById("A1").src="aliens-01.png"
            document.getElementById("A2").src="aliens-02.png"
            document.getElementById("A3").src="aliens-03.png"
            document.getElementById("A4").src="aliens-04.gif"
        }



    }

}
