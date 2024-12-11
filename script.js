// Yıl dönümü tarihi (Bu tarihi yıl dönümünüze göre ayarlayın)
const anniversaryDate = new Date("2024-12-18T00:00:00").getTime();

// Sayacı güncelleme işlevi
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = anniversaryDate - now;

    // Zaman farkını gün, saat, dakika ve saniye cinsinden hesapla
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Sayacı ekrana yazdır
    document.getElementById("countdown").innerHTML = `${days}g ${hours}s ${minutes}d ${seconds}s`;

    // Yıl dönümü geldiğinde sayaç durur ve mesaj gösterilir
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Tebrikler! Yıl dönümümüz geldi!";
        
        // Mesaj butonunu sayaç sıfırlandığında sayfanın alt kısmına yerleştir
        const messageButton = document.getElementById("messageButton");
        messageButton.style.display = 'inline-block'; // Butonu görünür yap
        messageButton.style.position = 'absolute';
        messageButton.style.top = '80%'; // Sayaç sıfırlandığında buton sayfanın altına yerleşir
        messageButton.style.left = '50%'; // Yatayda ortalamak için
        messageButton.style.transform = 'translateX(-50%)'; // Ortalamak için

        // Konfeti patlatma
        launchConfetti();
    }
}

// Konfeti patlatma fonksiyonu
function launchConfetti() {
    confetti({
        particleCount: 250,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Sayaç her saniye güncellenir
const countdownInterval = setInterval(updateCountdown, 1000);

// Mesajı gösterecek işlev
function showMessage() {
    const messageText = `
        Sevgilim,

        Üç yıl… Birçok anıyı, birlikte geçirdiğimiz zamanları düşündüğümde, her geçen gün daha da kıymetli hale gelen bir zaman dilimi. 
        Birbirimize duyduğumuz sevgiyle, gücümüzü her an bir adım daha ileri taşıdık. 
        İlk başlarda belki sadece iki yabancıydık, ama zamanla birbirimizi o kadar benimsedik ki, artık birbirimizin en yakın dostu, sırtımızı yaslayabileceğimiz en güvenli liman olduk.

        Bu üç yıl boyunca sana duyduğum sevgi, hayal bile edemeyeceğim kadar büyüdü. 
        Her gülüşün, her bakışın, her küçük dokunuşun kalbimde bir iz bıraktı. Seninle olmak, her anı dolu dolu yaşamak, 
        seninle gülerken zamanın nasıl geçtiğini anlamamak, seninle ağlarken hayatın acılarını bile daha kolay atlatmak… 
        Seninle her şey daha güzel, daha anlamlı.

        Bana sunduğun her şey için, gösterdiğin her anlayış ve sevgi için minnettarım. 
        Sadece iyi günlerde değil, zor zamanlarda da yanımda oldun, bu sevgiyi her yönüyle derinlemesine hissettirdin. 
        İyi ki varsın, iyi ki benimlesin… 

        Hayatımda seni tanımak, seni sevmek bana her şeyin en güzelini sundu.

        Üç yıl belki uzun bir süre değil, ama bu sürede seninle kurduğum her anı ömrümün sonuna kadar hatırlayacağım. 
        Bunu ne kadar söylesem de, hissettiklerimi kelimelere dökmek zor. Çünkü seni sevmenin tarifi yok; bu bir duygu, bir bağ, bir ruh hali… 
        Seninle geçirdiğim her an, bana hayatın ne kadar değerli olduğunu bir kez daha hatırlatıyor.

        Umut ediyorum ki, birlikte daha çok yıl geçireceğiz, daha çok anı biriktireceğiz. 
        Seninle her şey mümkün, seninle her şey daha parlak ve daha güzel. Sonsuza kadar seninle olmak, seninle yaşamak en büyük hayalim.

        Bu üç yıl bizim için sadece bir başlangıç. Birlikte geçireceğimiz daha nice yıllara, daha nice anılara… ♥️
    `;

    document.getElementById("messageText").textContent = messageText;

    // Mesaj kutusunu göster
    document.getElementById("messageContainer").style.display = 'block';

    // Butonu gizle
    document.getElementById("messageButton").style.display = 'none';
}
