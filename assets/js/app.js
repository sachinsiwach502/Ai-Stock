$('.slick_slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

let hdnTxt = document.querySelector(".acc_hidden_txt").style.display = "block";
let arrow = document.querySelector(".acc_arrow").style.transform = "rotate(180deg)";

let accItm = document.querySelectorAll(".acc_itm");
accItm.forEach(e => {
    let clickPart = e.querySelector(".acc_click_head");
    let accArrow = e.querySelector(".acc_arrow");
    let hiddenTxt = e.querySelector(".acc_hidden_txt");

    clickPart.addEventListener("click", () => {
        // Hide all other items
        accItm.forEach(j => {
            if (j !== e) {
                let otherHiddenTxt = j.querySelector(".acc_hidden_txt");
                let otherAccArrow = j.querySelector(".acc_arrow");
                otherHiddenTxt.style.display = "none";
                otherAccArrow.style.transform = "rotate(0deg)";
            }
        });

        // Toggle the current item
        let txtStyle = window.getComputedStyle(hiddenTxt).display;
        if (txtStyle === "none") {
            hiddenTxt.style.display = "block";
            accArrow.style.transform = "rotate(180deg)";
        } else {
            hiddenTxt.style.display = "none";
            accArrow.style.transform = "rotate(0deg)";
        }
    });
});


$('.slick_slider01').slick({
    dots: false,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: 'linear',
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.slick_slider02').slick({
    dots: false,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: 'linear',
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.slick_slider03').slick({
    dots: false,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: 'linear',
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
