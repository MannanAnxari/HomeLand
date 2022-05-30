let navbar = document.querySelector('.header .navbar');
let header = document.querySelector('.header');

window.onscroll = () => {
    navbar.classList.remove('active');
    if (scrollY > 5) {
        header.style.marginTop = "0rem";
    } else {
        header.style.marginTop = "5rem";
    }

    function myFunction(x) {
        if (x.matches) {
            // header.style.marginTop = "0rem";
            if (scrollY > 0) {
                header.style.marginTop = "0rem!important";
                console.log("Done");
            } else {
                header.style.marginTop = "10rem";
                console.log("Else Done");
            }
            console.log(scrollY);

        } else {
            if (scrollY > 5) {
                header.style.marginTop = "0rem";
            } else {
                header.style.marginTop = "5rem";
            }
        }
    }

    var x = window.matchMedia("(max-width: 450px)")
    myFunction(x)
    x.addListener(myFunction)
}
console.log(scrollY);