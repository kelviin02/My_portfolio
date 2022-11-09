//MOVING TEXT
var options = {
    strings: ['<i>Developer</i> .', 'Programmer.',"Freelancer."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  };
  
  var typed = new Typed('#auto-type', options);


//NAV-BARS
  const navBar = document.querySelector("#faa-bar")
  navBar.addEventListener("click", toggleIcon)

  function toggleIcon(){
      navBar.classList.toggle("fa-bars")
      navBar.classList.toggle("fa-times")
  }


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
        function sendEmail(){
            Email.send({
                Host : "smtp.gmail.com",
                Username : "opeoluwakelvin67@gmail.com",
                Password : "dasilverjnr",
                To : "lanrekelipher67@gmail.com",
                From : document.querySelector(".email").value,
                Subject : "THIS IS THE SUBJECT",
                Body : "Name" + document.querySelector(".name").value
                + "<br> Email: " + document.querySelector(".email").value
                + "<br> Phone-number: " + document.querySelector(".phone-number").value
                + "<br> Message: " + document.querySelector("#message").value
            }).then(
              message => alert("Message sent succesfully.")
            )
        }