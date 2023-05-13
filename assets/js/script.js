const aboutSection = document.querySelector("#about");
const headerSection = document.querySelector("#header");
const portfolioSection = document.querySelector("#portfolio");
const contactSection = document.querySelector("#contact");
const links = document.querySelectorAll("navigation a");

window.addEventListener("scroll", () => {
  if (isInViewport(aboutSection)) {
    links.forEach(link => link.style.color = "red");
  } else if (!isInViewport(aboutSection) && !isInViewport(headerSection) &&
    !isInViewport(portfolioSection) && !isInViewport(contactSection)) {
    return;
  } else {
    links.forEach(link => link.style.color = "black");
  }
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.left >= 0 &&
    rect.top >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
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

