// Buat Navbar
const btn = document.querySelector(".menuBtn");
const Navbar = document.querySelector(".menu");

btn.addEventListener('click', function() {
    Navbar.classList.toggle("nav-active");
})

//Buat Tracklist
const btnTracks = document.querySelectorAll(".btn-track");
const triangles = document.querySelectorAll(".triangle-down");
const tracks = document.querySelectorAll(".tracks-close");

btnTracks.forEach(function(btnTrack, index) {
    btnTrack.addEventListener("click", function () {
        triangles[index].classList.toggle("triangle-up");
        triangles[index].classList.toggle("triangle-down");
        tracks[index].classList.toggle("tracks-close");
        tracks[index].classList.toggle("tracks");
    });
});

//Buat Validasi Form
document.getElementById("btnSubmit").onclick = function() {
    myFunction()   
};


function myFunction() {
    const firstName = document.getElementById("namaDepan").value;
    const lastName = document.getElementById("namaBelakang").value;
    const Email = document.getElementById("email").value;

    function validateEmail(Email) {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(Email.value.match(emailRegex)) {
            return true;
        } else {
            return false;
        }
    }

    if(firstName == "" || lastName == ""|| Email == "") {
        alert("Form anda belum lengkap");
    } else {
        let validation = "Nama depan: " + firstName + "\nNama belakang: " + lastName + "\nE-mail: " + Email + "\nApakah anda yakin dengan data ini?";
        if(confirm(validation) == true) {
            alert("Anda telah berhasil berlangganan newsletter");
            window.location.reload();
        } 
    }
    
}
