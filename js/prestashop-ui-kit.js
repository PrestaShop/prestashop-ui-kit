import 'tether';
import 'bootstrap';
import 'select2';
import 'jquery.growl';
import 'pstagger';
import initInputFile from './components/file-input.js';
import PSNumbers from './components/ps-numbers.js';

$.fn.pstooltip = $.fn.tooltip;

/*!
* Prestige v1.0.0 (http://getbootstrap.com)
* Copyright 2015-2015
* Copy License
*/

(function (global, jQuery) {

  if (typeof global === 'undefined' && typeof window !== 'undefined') {
    global = window;
  }

  if (typeof jQuery === 'undefined') {
    console.error('PrestaShopUI needs jQuery.');
  }

  /**
  * Enable all Select2
  *
  * @TODO Add templateResult
  */
  var initSelect2 = function() {
    jQuery('[data-toggle="select2"]').each(function () {

      var newObj = {"minimumResultsForSearch": -1};

      for (var attr in $(this).data()) {
        if (!attr.localeCompare('templateresult')) {
          newObj["templateResult"] = eval($(this).data()[attr]);
        } else if (!attr.localeCompare('templateselection')) {
          newObj["templateSelection"] = eval($(this).data()[attr]);
        } else if (!attr.localeCompare('minimumresultsforsearch')) {
          newObj["minimumResultsForSearch"] = $(this).data()[attr];
        } else if (attr.localeCompare('toggle')) {
          newObj[attr] = $(this).data()[attr];
        }
      }

      jQuery(this).select2(newObj);
    });
  }

  /**
  * Enable all toggle buttons
  */
  var initToggleButtons = function() {
    jQuery('[data-toggle="switch"]').each(function() {
      var checkbox = jQuery(this);
      if (checkbox.data('activated') == undefined) {
        checkbox.data('activated', true);

        var baseClass = checkbox.prop('checked') ? '-checked' : '';

        checkbox.wrap('<div class="switch-input '+baseClass+'"></div>');
        var parent = checkbox.parent();
        parent.addClass(checkbox.attr('class'));

        checkbox.on('change', function() {
          parent.toggleClass('-checked', checkbox.prop('checked'));
        });

        parent.click(function(event) {
          if (event.srcElement == parent[0] || event.srcElement == undefined) {
            checkbox.prop('checked', !checkbox.prop('checked'));
            return false;
          }
        });
      }
    });
  }

  var initAlerts = function() {
    jQuery('.alert-text').each(function () {
      var $this = jQuery(this);
      var height = $this.height();
      var lineHeight = parseFloat($this.css('lineHeight'));
      var rows = height / lineHeight;
      var lines = 5;

      if (Math.ceil(rows) > lines) {
        var actualHtml = $this.html();
        var actualClass = $this.parent().attr('class');
        $this.parent().addClass( "alert-drop" );

        if (typeof($this.data('title')) != 'undefined' && $this.data('title') !== '') {
          $this.html('<b>' + $this.data('title') + '</b>');
        } else {
          $this.html('<b>Read More</b>');
        }
        $this.css('cursor', 'pointer');
        $this.parent().after(
          '<div class="'+ actualClass + ' alert-down" role="alert"><p class="alert-down-text"></p></div>'
        );
        jQuery('.alert-down-text').html(actualHtml);
      }
    });

    $('.alert-drop').each(function(){
      var $this = jQuery(this);
      $this.click(function(){
        var radius = $this.css('border-radius');
        if ($this.next('div').is(':hidden')) {
          $this.css('border-radius', '0');
          $this.css('border-bottom', 'none');
        } else {
          $this.css('border-radius', radius);
          $this.css('border-bottom', '');
        }
        $this.next('div').slideToggle(400);
      });
    });
  }

  var initToolTips = function() {
    jQuery('.tooltip-error').pstooltip({
      template: '<div class="pstooltip"><div class="tooltip-error"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>'
    });
    jQuery('[data-toggle="pstooltip"]').pstooltip();
    jQuery('[data-toggle="popover"]').popover();
  }

  var initSearchBar = function() {
    $('.js-form-search').on('focusin', function() {
       if (!$('.js-dropdown-form').hasClass('expanded')) {
         $('.js-dropdown-form').addClass('expanded');
       }
     });
  }

  global.prestaShopUiKit = {

    /**
    * PrestaShop UI initialization.
    *
    * Initilialize some jQuery components, settings and existings elements.
    */
    init: function() {
      jQuery(function(){

        // Add a jQuery listener to the checkbox change value
        jQuery.propHooks.checked = {
          set: function(elem, value, name) {
            var ret = (elem[ name ] = value);
            $(elem).trigger('change');
            return ret;
          }
        };

        // Set default theme to prestakit for Select2
        jQuery.fn.select2.defaults.set('theme', 'bootstrap');

        // Set default width on auto to fix responsive content for Select2
        jQuery.fn.select2.defaults.set('width', 'auto');

        initSelect2();
        initToggleButtons();
        initAlerts();
        initToolTips();
        initSearchBar();
        initInputFile();
        new PSNumbers('.ps-number');
      });
    },

    initSelects: function() {
      initSelect2();
    },

    initToolTips: function() {
      initToolTips();
    }
  };

  global.prestaShopUiKit.init();

})(typeof window !== 'undefined' ? window : this, $);




// Other initializations
// @TODO: Move the needed initializations into the object
// @TODO: Redo the psdwl to allow an external control for the different states
$(function () {

  // Keep unique configuration
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

  // Spinner
  // @TODO: Add addEventListener, prototype, callback
  // 1.0.0
  $.fn.psdwl = function(_config) {
    var config = null;

    // Default Configuration
    var defaultConfig =  {
      hover: 'install',
      validate: '<i class="material-icons">check</i>',
      text: 'default',
      time: 3000,
      default: true
    };

    var psdwl = this;
    config = setConfig(_config, defaultConfig);

    if (config.default) {
      var value = psdwl.attr('class').replace(/(btn-\w+)/, '$1-reverse');
      psdwl.attr('class', value);
    }

    if(typeof($(psdwl.selector).html()) != "undefined" && $(psdwl.selector).html() !== '') {
      config.text = $(psdwl.selector).text();
    }

    // Width correction on Hover
    psdwl.html(config.hover);
    var hw = this.css('width');
    psdwl.html(config.text);
    var w = this.css('width');

    // Higher width or default
    var width = parseInt(w, 10) < parseInt(hw, 10) ? hw : w;
    width = parseInt(width, 10) < 95 ? '95px' : width;

    psdwl.css('width', width);

    psdwl.hover(function () {
      psdwl.html(config.hover);
    }, function() {
      psdwl.html(config.text);
    });

    psdwl.click(function() {
      psdwl.css('border-left-color', psdwl.css('border-color'));
      psdwl.addClass( 'onclick' );
      psdwl.unbind('mouseenter').unbind('mouseleave').unbind('click');
      var nw = parseInt(width, 10);
      psdwl.css({
        'width': '',
        'margin-left': nw / 4,
        'margin-right': nw / 4
      });

      setTimeout(function() {
        psdwl.removeClass( "onclick" );
        psdwl.css({
          'margin-left': '',
          'margin-right': '',
          'width': width,
          'border-left-color' : ''
        });
        psdwl.html(config.validate);

        if (config.default) {
          var value = psdwl.attr('class').replace('-reverse', '');
          psdwl.attr('class', value);
        }
      }, config.time );

    });

  };
});
