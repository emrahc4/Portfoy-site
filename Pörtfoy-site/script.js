let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const themeMoon = document.querySelector(".bxs-moon");
const themeSun = document.querySelector(".bxs-sun");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

themeMoon.addEventListener("click", () => {
  themeMoon.classList.remove("active");
  themeSun.classList.add("active");
  document.body.classList.remove("active");
});

themeSun.addEventListener("click", () => {
  themeSun.classList.remove("active");
  themeMoon.classList.add("active");
  document.body.classList.add("active");
});
 // Sayfa kaydırma animasyonu için
    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.contact'); // Animasyon uygulanacak bölümü seçin

        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150; // Animasyonun ne kadar yukarıda başlayacağını ayarlar (piksel)

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('animate'); // Bölüm görünür olduğunda 'animate' sınıfını ekle
            } else {
                // İsteğe bağlı: Bölüm ekrandan çıktığında animasyonu sıfırlamak isterseniz
                // reveals[i].classList.remove('animate');
            }
        }
    }

    // Sayfa yüklendiğinde başlangıçta zaten görünür alandaki elementler için animasyonu çalıştır
    reveal();
