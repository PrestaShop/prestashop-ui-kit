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

    var setConfig = function (givenConfig, defaultConfig) {
        var finalConfig = {};

        for (var property in defaultConfig) {
            if (givenConfig.hasOwnProperty(property)) {
                finalConfig[property] = givenConfig[property];
            } else {
                finalConfig[property] = defaultConfig[property];
            }
        }

        return finalConfig;
    };

    $.fn.psdwl = function(_config) {
        var config = null;

        var defaultConfig =  {
            hover: 'install',
            validate: '<i class="zmdi zmdi-check"></i>',
            text: 'default',
            time: 3000,
            default: true
        };

        var psdwl = this;
        config = setConfig(_config, defaultConfig);

        if (config.default) {
            var value = psdwl.attr('class').replace(/(btn-\w+)/, "$1-reverse");
            psdwl.attr('class', value);
        }

        if(typeof($(psdwl.selector).html()) != "undefined" && $(psdwl.selector).html() !== "") {
            config.text = $(psdwl.selector).text();
        }

        psdwl.html(config.hover);
        var hw = this.css('width');
        psdwl.html(config.text);
        var w = this.css('width');

        var width = parseInt(w, 10) < parseInt(hw, 10) ? hw : w;

        if (parseInt(width, 10) < 90)
            width = '95px';

        psdwl.css('width', width);

        psdwl.hover(function () {
            psdwl.css('width', width);
            psdwl.html(config.hover);
        }, function() {
            psdwl.html(config.text);
        });

        psdwl.click(function() {
            psdwl.css('border-left-color', psdwl.css('border-color'));
            psdwl.addClass( 'onclic' );
            psdwl.unbind('mouseenter').unbind('mouseleave').unbind('click');
            var nw = parseInt(width, 10);
            psdwl.css({
                'width': '',
                'margin-left': nw / 4,
                'margin-right': nw / 4
            });

            setTimeout(function() {
                psdwl.removeClass( "onclic" );
                psdwl.css({
                    'margin-left': '',
                    'margin-right': '',
                    'width': width,
                    'border-left-color' : ''
                });
                psdwl.html(config.validate);

                if (config.default) {
                    var value = psdwl.attr('class').replace('-reverse', "");
                    psdwl.attr('class', value);
                }
            }, config.time );

        });

    };;

    // Apply toggle is long text
    $(".alert-text").each(function () {
        var height = $(this).height();
        var lineHeight = parseFloat($(this).css("lineHeight"));
        var rows = height / lineHeight;
        var lines = 5;

        if (Math.ceil(rows) > lines) {
            var actualHtml = $(this).html();
            var actualClass = $(this).parent().attr('class');
            $(this).parent().addClass( "alert-drop" );
            $(this).html("<b>Read More</b>");
            $(this).parent().after(
                '<div class="'+ actualClass + ' alert-down" role="alert"><p class="alert-down-text"></p></div>'
            );
            $(".alert-down-text").html(actualHtml);
        }
    });

    $('.alert-drop').each(function(){
        $(this).click(function(){
            var radius = $(this).css("border-radius");
            if ($(this).next('div').is(":hidden")) {
                $(this).css("border-radius", '0');
                $(this).css("border-bottom", 'none');
            } else {
                $(this).css("border-radius", radius);
                $(this).css("border-bottom", '');
            }
            $(this).next('div').slideToggle(400);
        });
    });

    // examples
    $('#error').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        return $.growl.error({
            title: "",
            size: "large",
            message: "The kitten is attacking!"
        });
    });

    // examples
    $('#notice').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        return $.growl.notice({
            title: "",
            size: "large",
            message: "The kitten is cute!"
        });
    });

    // examples
    $("#psdwl").psdwl({});

    // examples
    $("#psdwl-2").psdwl({
        text: '€199,99',
        hover: 'discover',
        default: false
    });


});
