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
            validate: '<i class=\"fa fa-check\"></i>',
            text: 'default',
            default: true
        };

        var psdwl = this;
        config = setConfig(_config, defaultConfig);

        if (config.default) {
            var value = psdwl.attr('class').replace(/(btn-\w+)/, "$1-reverse");
            psdwl.attr('class', value);
        }

        this.text(config.text);
        var w = this.css('width');

        this.hover(function () {
            psdwl.css('width', w);
            psdwl.text(config.hover);
        }, function() {
            psdwl.css('width', '');
            psdwl.text(config.text);
        });

        psdwl.click(function() {
            psdwl.css('border-left-color', psdwl.css('border-color'));
            psdwl.addClass( 'onclic' );
            psdwl.unbind('mouseenter').unbind('mouseleave').unbind('click');
            var nw = parseInt(w, 10);
            psdwl.css({
                'width': '',
                'margin-left': nw / 4
            });

            setTimeout(function() {
                psdwl.removeClass( "onclic" );
                psdwl.css({
                    'margin-left': '',
                    'width': w
                });
                psdwl.html(config.validate);

                if (config.default) {
                    var value = psdwl.attr('class').replace('-reverse', "");
                    psdwl.attr('class', value);
                }

            }, 3000 );

        });

    };;

    $("#psdwl").psdwl({
        text: '€ 199.99'
    });
});
