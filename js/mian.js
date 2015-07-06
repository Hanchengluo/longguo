//banner
$(document).ready(function() {
    $dragBln = false;

    $(".banner_image").touchSlider({
        flexible: true,
        speed: 200,
        btn_prev: $("#btn_prev"),
        btn_next: $("#btn_next"),
        paging: $(".flicking_con a"),
    });

    $(".banner_image").bind("mousedown", function() {
        $dragBln = false;
    });

    $(".banner_image").bind("dragstart", function() {
        $dragBln = true;
    });

    $(".banner_image a").click(function() {
        if ($dragBln) {
            return false;
        }
    });

    timer = setInterval(function() {
        $("#btn_next").click();
    }, 5000);

    $(".banner_visual").hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(function() {
            $("#btn_next").click();
        }, 5000);
    });

    $(".banner_image").bind("touchstart", function() {
        clearInterval(timer);
    }).bind("touchend", function() {
        timer = setInterval(function() {
            $("#btn_next").click();
        }, 5000);
    });

});

//bid-scroll
$(function() {
        $('#bid-scroll').marquee({
            auto: true,
            interval: 3000,
            showNum: 5,
            stepLen: 1,
            type: 'vertical'
        });
    })
    //tab
$(document).ready(function() {
    var $tab_li = $('#tab1 a');
    $tab_li.hover(function() {
        $(this).addClass('pass').siblings().removeClass('pass');
        var index = $tab_li.index(this);
        $('.thechart' ).eq(index).show().siblings().hide();
    });
});

$(document).ready(function() {
    var $tab_li = $('#tab2 a');
    $tab_li.hover(function() {
        $(this).addClass('pass').siblings().removeClass('pass');
        var index = $tab_li.index(this);
        $('.chart-tab2' ).eq(index).show().siblings().hide();
    });
});
$(document).ready(function() {
    var $tab_li = $('#tab3 a');
    $tab_li.hover(function() {
        $(this).addClass('pass').siblings().removeClass('pass');
        var index = $tab_li.index(this);
        $('.chart-tab3' ).eq(index).show().siblings().hide();
    });
});
$(document).ready(function() {
    var $tab_li = $('#tab4 a');
    $tab_li.hover(function() {
        $(this).addClass('pass').siblings().removeClass('pass');
        var index = $tab_li.index(this);
        $('.chart-tab4' ).eq(index).show().siblings().hide();
    });
});