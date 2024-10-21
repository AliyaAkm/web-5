
/* keydown*/
document.addEventListener('keydown', (event) => {
    const key = event.key;

    switch (key) {
        case '1':

            window.location.href = 'index.html';
            break;
        case '2':

            window.location.href = 'review.html';
            break;
        case '3':

            window.location.href = 'releases.html';
            break;
        case '4':

            window.location.href = 'contact.html';
            break;
        default:
            break;
    }
});

    // Form
    var Form1 = document.getElementById("Form1");
    var Form2 = document.getElementById("Form2");
    var Form3 = document.getElementById("Form3");

    var Next1 = document.getElementById("Next1");
    var Next2 = document.getElementById("Next2");
    var Back1 = document.getElementById("Back1");
    var Back2 = document.getElementById("Back2");

    var progress = document.getElementById("progress");

    Next1.onclick = function(){
    Form1.style.left = "-560px";
    Form2.style.left = "50px";
    progress.style.width = "334px";
}
    Back1.onclick = function(){
    Form1.style.left = "50px";
    Form2.style.left = "560px";
    progress.style.width = "167px";
}
    Next2.onclick = function(){
    Form2.style.left = "-560px";
    Form3.style.left = "50px";
    progress.style.width = "501px";
}
    Back2.onclick = function(){
    Form2.style.left = "50px";
    Form3.style.left = "560px";
    progress.style.width = "334px";
}