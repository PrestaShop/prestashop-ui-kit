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
});
