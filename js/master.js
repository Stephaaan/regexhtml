let numberInput = null;
let bodyContainer = null;
let firstLoad = true;
window.onload = () => {
    numberInput = $("#numberInput");
    bodyContainer = $("#mainContainer");
};
const over = () => {
    number = numberInput.val();
    let test = /^(0|\+421|00421)9\d{8}$/.test(number);
    if(firstLoad){
        let img = $("<img>").attr({id:"testResultImg", width:50});
        bodyContainer.append(img);
        firstLoad = false;
    }
    $("#testResultImg").attr({src:test?"imgs/happy.jpg":"imgs/sad.jpg"});
}