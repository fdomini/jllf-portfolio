
function colorChange(){
    document.getElementById("about").onscroll = function(){
        var nav = document.getElementsByClassName("navigation");

        nav.style.color= "black";
    }
}


function sendEmail(){
    var params = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value
    }


const serviceID = "service_emvgdvs";
const templateID = "template_7d30u2l";

emailjs.send(serviceID, templateID, params)
.then(
    res => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";

        console.log(res);
        alert("Your message has been sent successfully!");
    }
)

.catch((err) => console.log(err));

}

