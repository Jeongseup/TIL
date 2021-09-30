$(document).ready(function () {
    $(document).on('click', '.control nav a', function (event) {
        console.log('excuted', event.target.href);
        console.log(event.target.href + ' article');

        $('article').load(event.target.href + ' article>.content')


        history.pushState(null, null, event.target.href);
        event.preventDefault();
    });

    $(window).on('popstate', function (event) {
        console.log(location.href);
        $('article').load(location.href + ' article>.content')
    });


    var audio = new Audio('Tyburn - Eden.mp3');
    $(document).on('click', '.control .player .play', function (event) {
        audio.play();
    });
    $(document).on('click', '.control .player .pause', function (event) {
        audio.pause();
    });
});