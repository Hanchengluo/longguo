/**
 *
 * @authors huang2a (huang2a.com)
 * @date    2015-06-12 15:16:47
 * @version $Id$
 */
$(function() {
    var tt1;
    $(".content_bottom_tig").bind({
        mouseenter: function() {

            $(this).find(".h_bg").addClass("hover");

            that = $(this)
            tt1 = setTimeout(function() {
                that.animate({
                    height: 140
                });
            }, 200);
        },
        click: function() {},
        mouseleave: function() {
            $(this).find(".h_bg").removeClass("hover");
            clearTimeout(tt1);
            that.animate({
                height: 28
            });
        }
    });

})