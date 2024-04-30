
    var img = document.getElementById('frame1');
    var deg = 0;
    var animation;

    img.onmouseover = function() {
        animation = setInterval(function() {
            img.style.transform = 'rotate(' + deg + 'deg)';
            deg = (deg + 1) % 360;
        }, 10);
    };

    img.onmouseout = function() {
        clearInterval(animation);
        img.style.transform = 'rotate(0deg)';
    };