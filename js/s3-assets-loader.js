var s3BucketUrl = 'https://s3.ap-southeast-2.amazonaws.com/fruitables-1.0.0-chirag/';

window.onload = function() {
    document.getElementById('bootstrapCSS').href = s3BucketUrl + 'css/bootstrap.min.css';
    document.getElementById('styleCSS').href = s3BucketUrl + 'css/style.css';
    document.getElementById('lib-lightbox-css').href = s3BucketUrl + 'lib/lightbox/css/lightbox.min.css';
    document.getElementById('lib-carousel-assets').href = s3BucketUrl + 'lib/owlcarousel/assets/owl.carousel.min.css';
    document.getElementById('paymentImage').src = s3BucketUrl + 'img/payment.png';
    document.getElementById('mainJS').src = s3BucketUrl + 'js/main.js';
    document.getElementById('lib-easing-js').src = s3BucketUrl + 'lib/easing/easing.min.js';
    document.getElementById('lib-waypoints-js').src = s3BucketUrl + 'lib/waypoints/waypoints.min.js';
    document.getElementById('lib-lightbox-js').src = s3BucketUrl + 'lib/lightbox/js/lightbox.min.js';
    document.getElementById('lib-carousel-js').src = s3BucketUrl + 'lib/owlcarousel/owl.carousel.min.js';
};
