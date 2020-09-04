(function($){
  $.fn.toc = function(options) {
    var defaults = {
      noBackToTopLinks: true,
      title: '',
      minimumHeaders: 3,
      headers: 'h1, h2, h3, h4, h5, h6',
      listType: 'ul', // values: [ol|ul]
      showEffect: 'show', // values: [show|slideDown|fadeIn|none]
      showSpeed: 'slow', // set to 0 to deactivate effect
      classes: { list: '',
                 item: ''
               }
    },
    settings = $.extend(defaults, options);
    level2 = false;
    function fixedEncodeURIComponent (str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return '%' + c.charCodeAt(0).toString(16);
      });
    }
    
    function createLink(header) {
      var innerText = (header.textContent === undefined) ? header.innerText : header.textContent;
      return "<a class=\"col-11\" href='#" + fixedEncodeURIComponent(header.id.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) + "'>" + innerText + "</a>";
    }

    var headers = $(settings.headers).filter(function() {
      // get all headers with an ID
      var previousSiblingName = $(this).prev().attr( "name" );
      if (!this.id && previousSiblingName) {
        this.id = $(this).attr( "id", previousSiblingName.replace(/\./g, "-") );
      }
      return this.id;
    }), output = $(this);
    if (!headers.length || headers.length < settings.minimumHeaders || !output.length) {
      $(this).hide();
      return;
    }

    if (0 === settings.showSpeed) {
      settings.showEffect = 'none';
    }

    var render = {
      show: function() { output.hide().html(html).show(settings.showSpeed); },
      slideDown: function() { output.hide().html(html).slideDown(settings.showSpeed); },
      fadeIn: function() { output.hide().html(html).fadeIn(settings.showSpeed); },
      none: function() { output.html(html); }
    };

    var get_level = function(ele) { return parseInt(ele.nodeName.replace("H", ""), 10); };
    var highest_level = headers.map(function(_, ele) { return get_level(ele); }).get().sort()[0];
    var return_to_top = '<i class="icon-arrow-up back-to-top"> </i>';

    var level = get_level(headers[0]),
      this_level,
      html = settings.title + " <" + settings.listType + " class=\"" + settings.classes.list +"\">";
    headers.on('click', function() {
      if (!settings.noBackToTopLinks) {
        window.location.hash = this.id;
      }
    })
    .addClass('clickable-header')
    .each(function(_, header) {
      this_level = get_level(header);
      if (!settings.noBackToTopLinks && this_level === highest_level) {
        $(header).addClass('top-level-header').after(return_to_top);
      }
      $(header).append('<a href="#' + fixedEncodeURIComponent(header.id.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) + '" id="copy-button" onclick="CopyToClipboard(\'' + window.location.hostname + window.location.pathname +'#'+ fixedEncodeURIComponent(header.id.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) + '\')"><i class="fas fa-link"></i></a>')
      $("#" + header.id).attr("id", "E" + header.id)
      if (this_level === level) // same level as before; same indenting
        html += "<li class=\"row " + settings.classes.item + "\">" + createLink(header);
      else if (this_level <= level){ // higher level than before; end parent ol
        for(var i = this_level; i < level; i++) {
          html += "</li></"+settings.listType+">"
        }
        html += "<li class=\"row " + settings.classes.item + "\">" + createLink(header);
      }
      else if (this_level > level) { // lower level than before; expand the previous to contain a ol
        left = -190;
        for(i = this_level; i > level; i--) {
           if(this_level == 2 ){
            level2 = true;
           }
           if(level2 == true){
            left += 15*(i-2);

           } else {
            left += 15*(i-3);

           }
          html += "<a style=\"left:" + left + "px\" data-toggle='collapse' id=\"collapse-button-docs\" class=\"col-1 collapsed\" href='#" + fixedEncodeURIComponent(header.id.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) + "-" + i + "-col'></a><" + settings.listType + " class=\"panel-collapse collapse\" id=\"" + fixedEncodeURIComponent(header.id.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) + "-" + i + "-col" + settings.classes.list +"\">" +
                  "<li class=\"row " + settings.classes.item + "\">"
        }
        html += createLink(header);
      }
      level = this_level; // update for the next one
    });
    html += "</"+settings.listType+">";
    if (!settings.noBackToTopLinks) {
      $(document).on('click', '.back-to-top', function() {
        $(window).scrollTop(0);
        window.location.hash = '';
      });
    }

    render[settings.showEffect]();
  };
})(jQuery);
