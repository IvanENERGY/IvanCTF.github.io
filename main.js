/*-----------------------------toggle icon navbar------------------------------------*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=() => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}
/*-----------------------------scroll section active link------------------------------------*/ 
let sections= document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            })
        }
    });


    /*-----------------------------sticky navbar------------------------------------*/ 

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    /*-----------------------------remove tooglle icon and navbar------------------------------------*/ 
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');


};
/*---------------Scroll reveal----------------------*/
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-containter, .portfolio-box, .contact form',   {origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img',   {origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content',   {origin:'left'});

/*---------------TypeJSs----------------------*/
const typed= new Typed('.multiple-text',{
    strings: [' Computer Science graduate','Web Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
})
/*-------email-*/
function sendMail(){

    var name=document.getElementById("name").value;
    var address=document.getElementById("email").value;
    var mobile=document.getElementById("mobile").value;
    var subject=document.getElementById("subject").value;
    var message=document.getElementById("message").value;
    if (name == "" ||address == ""||mobile == ""||subject == ""||message == "" ){
        alert("Please fill in the missing blank.")
        return;
    }

    var params={
        name:name,
        address:address,
        mobile:mobile,
        subject:subject,
        message:message,
    };
    const serviceID="service_2ytq6wa";
    const templateID="template_ymvt4rr";

    emailjs
    .send(serviceID,templateID,params)
    .then((res)=>{
        document.getElementById("message").value="";
        document.getElementById("subject").value="";
        document.getElementById("mobile").value="";
        document.getElementById("email").value="";
        document.getElementById("name").value="";
        console.log(res);
        alert("Your message sent successfully")
    })
    .catch((err)=>console.log(err));
}