let formIntro = document.querySelector('.game_form');
let selectIntro = document.querySelector('#game_type');
let gameTimeSelector = document.querySelector('#game_time');
let submitBtn = document.querySelector('#submit');
let introBlock = document.querySelector('.top_side')
let gameBlock = document.querySelector('.bottom_side');
let cardWrapper = document.querySelector('.cards_area')
let timerMinut = document.querySelector('.minut');
let timerSeond = document.querySelector('.second');
let gameOverBlock = document.querySelector('.result');
let questionArea = document.querySelector('#question');
let gameScoreResult = document.querySelector('#game_result')
let winnerHolder = document.querySelector('.winner_holder');


const roadSigns = [{
        id: 0,
        title: "Yo'l bering",
        src: "./images/signs/yol_bering.gif"
    },
    {
        id: 1,
        title: "Turar-joy dahasi",
        src: "./images/signs/aholi_punkti.gif"
    },
    {
        id: 2,
        title: "Asosiy yolning oxiri",
        src: "./images/signs/asosiy_tugash.gif"
    },
    {
        id: 3,
        title: "Asosiy yo’lning yo’nalishi",
        src: "./images/signs/asosiy_yol_sxemasi.gif"
    },
    {
        id: 4,
        title: "Asosiy yol",
        src: "./images/signs/asosiy_yol.gif"
    },
    {
        id: 5,
        title: "Avtomagistral",
        src: "./images/signs/avtomagistral.gif"
    },
    {
        id: 6,
        title: "Avtomagistral oxiri",
        src: "./images/signs/avtomagistral_tugashi.gif"
    },
    {
        id: 7,
        title: "Velosiped yolkasi",
        src: "./images/signs/velosiped_yolkasi.gif"
    },
    {
        id: 8,
        title: "Transport vositalarini yuvish joyi",
        src: "./images/signs/avtomoyka.gif"
    },
    {
        id: 9,
        title: "Texnik xizmat ko’rsatish joyi",
        src: "./images/signs/avtoservis.gif"
    },
    {
        id: 10,
        title: "Aylanma harakatlanish",
        src: "./images/signs/aylanma_yol.gif"
    },
    {
        id: 11,
        title: "Belgilangan yo’nalishli transport vositalari uchun mo’ljallangan bo’lak",
        src: "./images/signs/belgilangan_yonalishli_transport_yolak.gif"
    },
    {
        id: 12,
        title: "Yonilg’i shaxobchasi",
        src: "./images/signs/benzin.gif"
    },
    {
        id: 13,
        title: "Bir izli temir yo’l",
        src: "./images/signs/bir_izli_temir.gif"
    },
    {
        id: 14,
        title: "Bolalar",
        src: "./images/signs/bolalar.gif"
    },
    {
        id: 15,
        title: "Oxiri berk yo’l, ko’cha",
        src: "./images/signs/boshi_berk_kocha.gif"
    },
    {
        id: 16,
        title: "Boshqa xavf-xatar",
        src: "./images/signs/boshqa_xavf.gif"
    },
    {
        id: 17,
        title: "Chapga burilish taqiqlanadi",
        src: "./images/signs/burilish_taqiqlanadi.gif"
    },
    {
        id: 18,
        title: "Eng kam tezlik belgilangan yo’lning oxiri",
        src: "./images/signs/eng_kam_tezlik_oxiri.gif"
    },
    {
        id: 19,
        title: "Avtomobillarni ko’rikdan o’tkazish joyi",
        src: "./images/signs/estakada.gif"
    },
    {
        id: 20,
        title: "Harakatlanish taqiqlangan",
        src: "./images/signs/faqat_odamlaga.gif"
    },
    {
        id: 21,
        title: "Harakatlanish chapga",
        src: "./images/signs/harakatlanish_chapga.gif"
    },
    {
        id: 22,
        title: "Harakatlanish o'nga",
        src: "./images/signs/harakatlanish_onga.gif"
    },
    {
        id: 23,
        title: "Harakatlanish o'nga yoki tog'riga",
        src: "./images/signs/harakatlanish_onga_togriga.gif"
    },
    {
        id: 24,
        title: "Harakatlanish tasviri",
        src: "./images/signs/harakatlanish_tasviri.gif"
    },
    {
        id: 25,
        title: "Harakatlanish tog'riga",
        src: "./images/signs/harakatlanish_togriga.gif"
    },
    {
        id: 26,
        title: "Ichimlik suvi",
        src: "./images/signs/ichimlik_suvi.gif"
    },
    {
        id: 27,
        title: "Ikki tomonlama harakatlanish",
        src: "./images/signs/ikki_tomonlama_xarakatlanish.gif"
    },
    {
        id: 28,
        title: "Dam olish joyi",
        src: "./images/signs/kemping.gif"
    },
    {
        id: 29,
        title: "Kirish taqiqlangan",
        src: "./images/signs/kirish_taqiqlanadi.gif"
    },
    {
        id: 30,
        title: "Mehmonxona",
        src: "./images/signs/kasalxona.gif"
    },
    {
        id: 31,
        title: "Kotarma koprik",
        src: "./images/signs/kotarma_koprik.gif"
    },
    {
        id: 32,
        title: "Cheklangan balandlik",
        src: "./images/signs/maksimal_balandlik.gif"
    },
    {
        id: 33,
        title: "Cheklangan kenglik",
        src: "./images/signs/maksimal_kenglik.gif"
    },
    {
        id: 34,
        title: "Vazn cheklangan",
        src: "./images/signs/maksimal_ogrlik.gif"
    },
    {
        id: 35,
        title: "Cheklangan uzunlik",
        src: "./images/signs/maksimal_uzunlik.gif"
    },
    {
        id: 36,
        title: "Avtobus va trolleybus to’xtash joyi",
        src: "./images/signs/marshrut.gif"
    },
    {
        id: 37,
        title: "Mexanik transport vositalarining harakatlanishi taqiqlangan",
        src: "./images/signs/mexanik_taqiqlangan.gif"
    },
    {
        id: 38,
        title: "Mototsikllar harakatlanishi taqiqlangan",
        src: "./images/signs/motosikl_taqiqlanadi.gif"
    },
    {
        id: 39,
        title: "Eng kam oraliq",
        src: "./images/signs/oraliq_masofa.gif"
    },
    {
        id: 40,
        title: "Oshxona",
        src: "./images/signs/oshxona.gif"
    },
    {
        id: 41,
        title: "Ot-arava harakatlanishi taqiqlangan",
        src: "./images/signs/ot_arava_taqiqlanadi.gif"
    },
    {
        id: 42,
        title: "To’xtab turish joyi",
        src: "./images/signs/parkovka.gif"
    },
    {
        id: 43,
        title: "Pastlab uchuvchi samolyotlar",
        src: "./images/signs/pastlab_uchuvchi_samolyot.gif"
    },
    {
        id: 44,
        title: "Piyodalar o’tish joyi",
        src: "./images/signs/piyodalar_otish_joyi.gif"
    },
    {
        id: 45,
        title: "Piyodalar yo’lkasi",
        src: "./images/signs/piyodalar_yolagi.gif"
    },
    {
        id: 46,
        title: "Shlagbaumsiz temir yo’l kesishmasi",
        src: "./images/signs/poyezd.gif"
    },
    {
        id: 47,
        title: "Qayrilish ta'qiqlanadi",
        src: "./images/signs/qayrilish_taqiqlanadi.gif"
    },
    {
        id: 48,
        title: "Boshqa qatnov qismiga qayta tizilishning boshlang’ich ko’rsatkichi",
        src: "./images/signs/qayta_tizilish_sxemasi.gif"
    },
    {
        id: 49,
        title: "Quvib o’tish taqiqlanadi",
        src: "./images/signs/quvib_otish_taqiqlanadi.gif"
    },
    {
        id: 50,
        title: "Quvib o’tish ta'qiqlangan hududning oxiri",
        src: "./images/signs/quvib_otish_taqiqlanadi_tugadi.gif"
    },
    {
        id: 51,
        title: "Radar",
        src: "./images/signs/radar.jpg"
    },
    {
        id: 52,
        title: "Ro’paradagi harakatlanishga nisbatan imtiyoz",
        src: "./images/signs/ropara_imtiyo.gif"
    },
    {
        id: 53,
        title: "Ro’para harakatlanishning ustunligi",
        src: "./images/signs/ropara_ustunlik.gif"
    },
    {
        id: 54,
        title: "Shlagbaumli temir yo'l kesishmasi",
        src: "./images/signs/shlakbaumli_temiryol.gif"
    },
    {
        id: 55,
        title: "Sirpanchiq yo’l",
        src: "./images/signs/sirpanchiq_yol.gif"
    },
    {
        id: 56,
        title: "Sohilga chiqish",
        src: "./images/signs/soxilga_chiqish.gif"
    },
    {
        id: 57,
        title: "To’xtamasdan harakatlanish taqiqlangan",
        src: "./images/signs/stop.gif"
    },
    {
        id: 58,
        title: "Svetofor tartibga soladi",
        src: "./images/signs/svetofor.gif"
    },
    {
        id: 59,
        title: "Ta’mirlash ishlari",
        src: "./images/signs/tamirlash_ishlari.gif"
    },
    {
        id: 60,
        title: "Ta’sir oralig’i",
        src: "./images/signs/tasir_doirasi.gif"
    },
    {
        id: 61,
        title: "Taksi to’xtab turish joyi",
        src: "./images/signs/taxi.gif"
    },
    {
        id: 62,
        title: "Telefon",
        src: "./images/signs/telefon.gif"
    },
    {
        id: 63,
        title: "Temir yo’l kesishmasining yaqinligi haqida ogohlantirish",
        src: "./images/signs/temiryol_kesishmasining_yaqinligi.gif"
    },
    {
        id: 64,
        title: "Yuqori tezlik cheklangan",
        src: "./images/signs/tezlik-cheklangan.gif"
    },
    {
        id: 65,
        title: "Tik nishablik",
        src: "./images/signs/tik_nishablik.gif"
    },
    {
        id: 66,
        title: "Tik balandlik",
        src: "./images/signs/tik_qiyalik.gif"
    },
    {
        id: 67,
        title: "Tirkama bilan harakatlanish taqiqlangan",
        src: "./images/signs/tirkama_taqiq.gif"
    },
    {
        id: 68,
        title: "Xojatxona",
        src: "./images/signs/toilet.gif"
    },
    {
        id: 69,
        title: "Tonnel",
        src: "./images/signs/tonnel.gif"
    },
    {
        id: 70,
        title: "Tosh otilishi",
        src: "./images/signs/tosh_otilishi.gif"
    },
    {
        id: 71,
        title: "Toshlar tushishi",
        src: "./images/signs/tosh_tushishi.gif"
    },
    {
        id: 72,
        title: "To’siqni o’ngdan yoki chapdan chetlab o’tish",
        src: "./images/signs/tosiq_chap_ili_ong.gif"
    },
    {
        id: 73,
        title: "To’siqni chapdan chetlab o’tish",
        src: "./images/signs/tosiq_chapdan.gif"
    },
    {
        id: 74,
        title: "To’siqni chapdan o'ngdan chetlab o'tish",
        src: "./images/signs/tosiq_ongdan.gif"
    },
    {
        id: 75,
        title: "Tovush moslamalaridan foydalanish ta'qiqlangan",
        src: "./images/signs/tovushli_signal.gif"
    },
    {
        id: 76,
        title: "To’xtab turish ta'qiqlangan",
        src: "./images/signs/toxtab_turish.gif"
    },
    {
        id: 77,
        title: "To’xtash taqiqlangan",
        src: "./images/signs/toxtash_taqiqlanadi.gif"
    },
    {
        id: 78,
        title: "Transport vositasini to’xtab turish joyiga qo’yish usuli",
        src: "./images/signs/toxtash_usuli.gif"
    },
    {
        id: 79,
        title: "Traktorlar harakatlanishi taqiqlangan",
        src: "./images/signs/traktor.gif"
    },
    {
        id: 80,
        title: "Tramvay yo’li bilan kesishuv",
        src: "./images/signs/tramvay_kesishuv.gif"
    },
    {
        id: 81,
        title: "Tramvay to’xtash joyi",
        src: "./images/signs/tramvay.gif"
    },
    {
        id: 82,
        title: "Transport vositasining turi",
        src: "./images/signs/transport_vositasi_turi.gif"
    },
    {
        id: 83,
        title: "Turar-joy dahasining oxiri",
        src: "./images/signs/turar_joy_tugash.gif"
    },
    {
        id: 84,
        title: "Mol haydab o’tish",
        src: "./images/signs/uy_hayvonlari.gif"
    },
    {
        id: 85,
        title: "Velosipedda harakatlanish ta'qiqlangan",
        src: "./images/signs/velik_taqiqlanadi.gif"
    },
    {
        id: 86,
        title: "Velosiped yo’lkasi bilan kesishuv",
        src: "./images/signs/velosiped.gif"
    },
    {
        id: 87,
        title: "Piyodalarning yer ostidan o’tish joyi",
        src: "./images/signs/yer_osti_yoli.gif"
    },
    {
        id: 88,
        title: "Piyodalarning yer ustidan o’tish joyi",
        src: "./images/signs/yer_usti_yoli.gif"
    },
    {
        id: 89,
        title: "Yonlama shamol",
        src: "./images/signs/yonlama_shamol.gif"
    },
    {
        id: 90,
        title: "Yovvoyi hayvonlar",
        src: "./images/signs/yovvoyi_hayvonlar.gif"
    },
    {
        id: 91,
        title: "Yuk avtomobillarida quvib o’tish taqiqlangan",
        src: "./images/signs/yuk_avtomobil_quvish_taqiqlanadi.gif"
    },
    {
        id: 92,
        title: "Yuk avtommobillarida quvib o’tish taqiqlangan hududning oxiri",
        src: "./images/signs/yuk_avtomobil_quvish_taqiqlanadi_oxiri.gif"
    },
    {
        id: 93,
        title: "Tirbandlik",
        src: "./images/signs/tirbandlik.gif"
    },
    {
        id: 94,
        title: "Notekis yo’l",
        src: "./images/signs/notekis_yol.gif"
    },
    {
        id: 95,
        title: "Barcha cheklovlarning oxiri",
        src: "./images/signs/barcha.gif"
    },
    {
        id: 96,
        title: "Tavsiya etilgan tezlik",
        src: "./images/signs/tavsiya_etilgan_tezlik.gif"
    },
    {
        id: 97,
        title: "Surat va video",
        src: "./images/signs/surat_foto.png"
    },
    {
        id: 98,
        title: "Falokatli holatlar uchun kirish yo’li",
        src: "./images/signs/xatar_yol.gif"
    },
    {
        id: 99,
        title: "Shifoxona",
        src: "./images/signs/shifoxona.gif"
    },
    {
        id: 100,
        title: "Yuqori tezlik cheklangan hududning oxiri",
        src: "./images/signs/maksimal_tezlik_tugadi.gif"
    },
];

selectIntro.addEventListener('change', function () {
    submitBtn.disabled = false;
})

let tanlanganElementlar = []

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const b = roadSigns.slice();
const newArr = [];

selectIntro.addEventListener('change', function () {
    tanlanganElementlar.splice(0, tanlanganElementlar.length)
    if (selectIntro.value == "20") {
        for (i = 0; i <= 19; i++) {
            let arr = b[Math.floor(Math.random() * b.length)];
            let index = b.indexOf(arr);
            b.splice(index, 1);
            tanlanganElementlar.push(arr)
        }
    } else if (selectIntro.value == "40") {
        for (i = 0; i <= 39; i++) {
            let arr = b[Math.floor(Math.random() * b.length)];
            let index = b.indexOf(arr);
            b.splice(index, 1);
            tanlanganElementlar.push(arr)
        }
    } else if (selectIntro.value == "60") {
        for (i = 0; i <= 59; i++) {
            let arr = b[Math.floor(Math.random() * b.length)];
            let index = b.indexOf(arr);
            b.splice(index, 1);
            tanlanganElementlar.push(arr)
        }
    }
})


let gameScore = 0;

var Time = 0

function timeShower() {
    switch (gameTimeSelector.value) {
        case "60":
            Time = 60 ;
            break;
        case "120":
            Time = parseInt(120);
            break;
        case "180":
            Time = parseInt(180);
            break;
        case "240":
            Time = parseInt(240);
            break;
        case "300":
            Time = parseInt(300);
            break;
        case "360":
            Time = parseInt(360);
            break;
        case "420":
            Time = parseInt(420);
            break;
        case "480":
            Time = parseInt(480);
            break;
        case "540":
            Time = parseInt(540);
            break;
        case "600":
            Time = parseInt(600);
            break;
    }
}

submitBtn.addEventListener('click', function () {
    introBlock.classList.add('block_hidden');
    gameBlock.classList.add('active')
    indexBox = parseInt(selectIntro.value)
    let randomNumbers = 0;
    for (i = 0; i <= indexBox - 1; i++) {
        let listItem = document.createElement('button');
        listItem.setAttribute('class', 'box');
        listItem.setAttribute('data-acc-order', tanlanganElementlar[i].id)
        const img = document.createElement('img')
        let randomNumber = getRandomInt(0, tanlanganElementlar.length)
        questionArea.textContent = tanlanganElementlar[randomNumber].title
        questionArea.setAttribute('data-qs-order', tanlanganElementlar[randomNumber].id)
        img.setAttribute('src', tanlanganElementlar[i].src)
        listItem.appendChild(img);
        cardWrapper.appendChild(listItem);
    }
    let answerBtns = document.querySelectorAll('.box');
    answerBtns.forEach((item, itemIndex) => {
        item.addEventListener('click', function () {
            if (item.dataset.accOrder == questionArea.dataset.qsOrder) {
                item.disabled = true
                item.style.border = 'none'
                item.style.opacity = "0.2"
                gameScore = gameScore + 1
                if (gameScore == selectIntro.value) {
                    document.querySelector('body').classList.add('active');
                    winnerHolder.classList.add('active')
                }
                
                answerBtns.forEach(el => {
                    el.style.border = 'none'
                })


                tanlanganElementlar = tanlanganElementlar.filter(el => el.id != item.dataset.accOrder)
                let randomQs = getRandomInt(0, tanlanganElementlar.length)
                questionArea.textContent = tanlanganElementlar[randomQs].title
                questionArea.setAttribute('data-qs-order', tanlanganElementlar[randomQs].id)
            } else {
                item.style.border = "solid 5px red"
            }
        })
    })
})

formIntro.addEventListener('submit', function (e) {
    e.preventDefault();
    timeShower()
    const clearIntervalCode = setInterval(() => {
        timeCalc(clearIntervalCode)
        let timeSecond = Math.floor(Time % 60);
        let TimeMinut = Math.floor(Time / 60);
        if (TimeMinut < 10) {
            TimeMinut = "0" + TimeMinut
        }
        if (timeSecond < 10) {
            timeSecond = "0" + timeSecond
        }
        if (Time == 0) {
            document.querySelector('body').classList.add('active')
            gameOverBlock.classList.add('active')
        }
        timerMinut.textContent = TimeMinut
        timerSeond.textContent = timeSecond;
    }, 1000);
})

function timeCalc(clearIntervalCode) {
    if (Time == 1) {
        Time = 0
        clearInterval(clearIntervalCode)
        gameScoreResult.textContent = gameScore
    } else {
        Time = Time - 1;
    }
}