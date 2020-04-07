

var afurl = 'https://www.google.com/';

$(document).ready(function() {
    function progress(percent, $element) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find('.progress-bar-filling').animate({
            width: progressBarWidth
        }, 5000)
        //.html(percent + "%&nbsp;");
        jQuery({
            Counter: 0
        }).animate({
            Counter: 100
        }, {
            duration: 5000,
            easing: 'swing',
            step: function() {
                $('.progress-bar-percent').html(Math.ceil(this.Counter) + "%&nbsp;");
            }
        });
    }
    var complete = 100;
    progress(complete, $('#progress-bar'));
});

function linkTo(){
     window.location.href = afurl;
}