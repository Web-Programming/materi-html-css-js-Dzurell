function kirimPesan(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    if (!nama || !email || !pesan) {
        alert("Harap isi semua data!");
        return;
    }

    alert("Pesan berhasil dikirim!");
}

// Navbar + tombol atas
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let btn = document.getElementById("topBtn");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        btn.style.display = "block";
    } else {
        navbar.classList.remove("scrolled");
        btn.style.display = "none";
    }
});

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}