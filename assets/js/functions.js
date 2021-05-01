function scrollPercentage() {
    var winTop = $(window).scrollTop(),
        docHeight = $(document).height(),
        winHeight = $(window).height();

    return (winTop / (docHeight - winHeight)) * 100;
}

function scrollSteps(imagesNumber) {
    var steps = [];

    for (var i = 1; i < imagesNumber; i++) {
        steps[steps.length] = 100 / imagesNumber * i;
    }

    steps[steps.length] = 150;

    return steps;
}
