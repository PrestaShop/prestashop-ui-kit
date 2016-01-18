/*!
 * PrestaKit v1.0.0 (http://getbootstrap.com)
 * Copyright 2015-2015
 * Copy License
 */

$(function () {
    var options = {
        template: '<div class="tooltip"><div class="tooltip-error"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>'
    };
    $('.tooltip-error').tooltip(options);
    $('[data-toggle="tooltip"]').tooltip();

    $.fn.psdwl = function(_config) {
        var psdwl = this;
        this.text(_config.text);

        this.hover(function () {
            psdwl.text(_config.hover);
        }, function() {
            psdwl.text(_config.text);
        });

        psdwl.click(function() {
            var bc = psdwl.css('border-color');

            psdwl.css('border-left-color', bc);
            psdwl.addClass( "onclic" );

            setTimeout(function() {
                psdwl.removeClass( "onclic" );
                psdwl.addClass( "validate" );
                psdwl.text(_config.validate);
                psdwl.attr("disabled", "");
            }, 3250 );
        });

    };;

    $("#download").psdwl({
        hover: 'install',
        validate: "success",
        text: "123,54 HT"
    });

    $("#downloadtwo").psdwl({
        hover: 'install',
        validate: "success",
        text: "Free"
    });

});
