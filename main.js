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
    }

}
