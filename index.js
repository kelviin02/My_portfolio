//MOVING TEXT
var options = {
    strings: ['<i>Developer</i> .', 'Programmer.',"Freelancer."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  };
  
  var typed = new Typed('#auto-type', options);


//NAV-BARS
  //   const navBar = document.querySelector("#faa-bar")
  //   const nav = document.querySelector("nav")
  //   const navElement = document.querySelectorAll(".nav-elment")

  //   navBar.addEventListener("click", toggleIcon)
  //   navElement.forEach((navElement) => navElement.addEventListener("click", toggleIcon))

  //   function toggleIcon(){
  //     navBar.classList.toggle("fa-bars")
  //     navBar.classList.toggle("fa-times")
  //     nav.classList.toggle("show")
  // }


//BACK TO-TOP ARROW  
  const topIcon = document.querySelector('.to-top')
        window.addEventListener('scroll', showIcon)

        topIcon.addEventListener('click', toTop)

        function showIcon() {
            if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
                topIcon.style.display = "block"
            } else {
                topIcon.style.display = "none"
            }
        }

        function toTop() {
            document.documentElement.scrollTop = 0
        }

        //WORKING COONTACT FORM
        // function sendEmail(){
        //     Email.send({
        //         Host : "smtp.elasticemail.com",
        //         Username : "lanrekelipher67@gmail.com",
        //         Password : "AC05DDFD265CF6F64130488DE652D54C4AB3",
        //         To : "opeoluwakelvin@gmail.com",
        //         From : document.querySelector(".email").value,
        //         Subject : "THIS IS THE SUBJECT",
        //         Body : "Name" + document.querySelector(".name").value
        //         + "<br> Email: " + document.querySelector(".email").value
        //         + "<br> Phone-number: " + document.querySelector(".phone-number").value
        //         + "<br> Message: " + document.querySelector(".message").value
        //     }).then(
        //       message => alert("Message sent succesfully.")
        //     )
        // }



        // const form = document.querySelector(".contact-main-form")
        // const name = document.querySelector(".name")
        // const phone = document.querySelector(".phone-number")
        // const email = document.querySelector(".email")
        // const msg = document.querySelector(".message")



        // function sendMsg(e){
        //     Email.send({
        //         SecureToken : "0eaaa3c8-01d4-46fb-b9ad-43fd1268451e",
        //         To : 'opeoluwakelvin67@gmail.com',
        //         From : email.value,
        //         Subject : "This is the subject",
        //         Body : "Name:" + name.value
        //         + "<br> Email: " + email.value
        //         + "<br> Phone-number: " + phone.value
        //         + "<br> Message: " + msg.value
        //     }).then(
        //       message => alert("message sent successfully")
        //     );
    
        // }
        // form.addEventListener("submit", sendMsg)
//WORKING CONTACT FORM
// function sendMail(){
//     var params = {
//     name: document.querySelector(".name").value,
//     phone: document.querySelector(".phone-number").value,
//     email: document.querySelector(".email").value,  
//     message: document.querySelector(".message").value,
//     }
    
//     let serviceID = service_tj7qyvq
//     let templateID = template_8361iul


//     emailjs
//     .send(serviceID,templateID,params)
//     .then((res) =>{
//         document.querySelector(".name").value = ""
//         document.querySelector(".phone-number").value = ""
//         document.querySelector(".email").value = ""
//         document.querySelector(".message").value = ""
//         console.log(res)
//         alert("FUCK U")
//     })
//     .catch((err) => console.log(err))
// }

// WORKING CONTACT
const form = document.querySelector(".contact-main-form")
function sendMsg(e) {
  e.preventDefault()
 
   name = document.querySelector(".name")
   phone = document.querySelector(".phone-number")
   email = document.querySelector(".email")
   msg = document.querySelector(".message")

   //email for form function
    Email.send({
     SecureToken : "63eb4be3-f18c-4976-a0b6-da527abbf599",
     To : 'lanrekelipher67@gmail.com',
     From : email.value,
     Subject : "CONTACT FORM",
     Body : "msg.value"
    }).then(
  message => alert("FUCK YOU")
);

}
form.addEventListener("submit", sendMsg)