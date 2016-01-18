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
        psdwl.click(function() {

            psdwl.addClass( "onclic" );

            setTimeout(function() {
                psdwl.removeClass( "onclic" );
                psdwl.addClass( "validate" );
            }, 2250 );

            setTimeout(function() {
                psdwl.removeClass( "validate" );
            }, 1250 );
        });

        console.log((this));
        this.css('content', _config.text);
        console.log(_config);
    };;

    $("#download").psdwl({
        hover: 'install',
        validate: "text",
        text: "123"
    });

    // $(function() {
    //     $( ".download" ).click(function() {

    //         $( ".download" ).addClass( "onclic", 250);

    //         setTimeout(function() {
    //             $( ".download" ).removeClass( "onclic" );
    //             $( ".download" ).addClass( "validate", 450);
    //         }, 2250 );

    //         setTimeout(function() {
    //             $( ".download" ).removeClass( "validate" );
    //         }, 1250 );
    //     });
    // });
});
