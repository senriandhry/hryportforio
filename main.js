$(function() {
    // 1. Swiper（スライダー）の初期化
    // .mySwiperというクラスがついた要素すべてに適用されます
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 1.3,
        spaceBetween: 20,
        centeredSlides: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 2. Fancybox（画像拡大）の初期化
    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind('[data-fancybox="gallery"]', {
            // ここにオプションを書けます
        });
    }

    // 3. ハンバーガーメニューの動作
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');   // ボタンの形を三本線 ⇔ × に切り替え
        $('.navi').toggleClass('active'); // メニューを 画面外 ⇔ 画面内 に切り替え
    });

    // メニュー内のリンクをクリックしたらメニューを閉じる
    $('.menu a').on('click', function() {
        $('.hamburger').removeClass('active');
        $('.navi').removeClass('active');
    });
});