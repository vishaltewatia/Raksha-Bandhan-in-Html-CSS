(function() {
    function $(id) {
        return document.getElementById(id);
    }

    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;

    openB.addEventListener('click', function () {
        card.classList.add('open-half');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
            card.classList.add('open-fully');
            card.classList.remove('open-half');
            timer = null;
        }, 1000);
    });

    closeB.addEventListener('click', function () {
        card.classList.add('close-half');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
            card.classList.remove('open-fully', 'open-half', 'close-half');
            timer = null;
        }, 1000);
    });
}());
