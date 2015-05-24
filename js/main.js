$(document).ready(function () {
  loadOutta();
  $(document).find("form").each(function(){
    $(this).validate();
  });
  $('.attr input[name="phone"]').inputmask("phone", {
  });
  /*YA MAPS*/
  ymaps.ready(init);
  var myMap,
      fullScreen = false;
  function init () {
    myMap = new ymaps.Map('map', {
      center: [55.740537,37.618237],
      zoom: 17
    }),
        myPlacemark = new ymaps.Placemark([55.740537,37.618237], {
          balloonContent: '<h1><span class="line"></span>119180 Москва,<br/>ул. Большая Полянка, д.9, стр. 6</h1>',
          iconContent: ""
        }, {
          preset: "twirl#yellowStretchyIcon",
          balloonCloseButton: false,
          hideIconOnBalloonOpen: true
        });
    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
    myMap.controls.add(new ymaps.control.MapTools());
    myMap.controls.add('typeSelector');
    myMap.controls.add(new ymaps.control.ZoomControl());
    myPlacemark.balloon.open()
  }
})


function loadOutta() {
  if ($('.load_me_im').length) {
    $('.load_me_im').each(function () {
      $(this).css({
        "backgroundImage": "url('" + $(this).data("bg") + "')"
      });
    })
  }
}


jQuery.validator.setDefaults({
  onsubmit: true,
  highlight: function (element, errorClass) {
    $(element).closest('.form_element').addClass('has-error');
  },
  unhighlight: function (element, errorClass) {
    $(element).closest('.form_element').removeClass('has-error');
  },
  errorPlacement: function (error, element) {
    /*error.addClass('control-label').appendTo(element.parent());
    error.on('click', function () {
      error.remove();
      element.trigger('focus');
    });
    element.on('focus keyup', function () {
      error.remove();
    });*/
    error.remove();
  },
  submitHandler: function(form) {
    //$(form).submit();
    $.fancybox.open({href : '#complete'});
  },
  rules: {
    name: {
      required: true,
      minlength: 3
    },
    phone: {
      required: true
    }
  },
  messages: {
    name: {
      required: "Не заполнено",
      minlength: "Не заполнено"
    },
    phone: {
      required: "Не заполнено",
      minlength: "Не заполнено"
    }
  }
});


jQuery.extend($.inputmask.defaults, {
  "oncomplete": function () {
    $(this).closest('.form_element').removeClass('has-error');
  },
  "onincomplete": function () {
    $(this).closest('.form_element').addClass('has-error');
    /*var error = $('<label id="' + this.name + '-error" class="error" for="' + this.name + '">Не заполнено</label>')
    error.addClass('control-label').appendTo($(this).parent());
    error.on('click', function () {
      error.remove();
      $(this).trigger('focus');
    });
    $(this).on('focus keyup', function () {
      error.remove();
    });*/
  },
  "oncleared": function () {
    $(this).closest('.form_element').addClass('has-error');
    /*var error = $('<label id="' + this.name + '-error" class="error" for="' + this.name + '">Не заполнено</label>')
    error.addClass('control-label').appendTo($(this).parent());
    error.on('click', function () {
      error.remove();
      $(this).trigger('focus');
    });
    $(this).on('focus keyup', function () {
      error.remove();
    })*/;
  }
});
