(function($) {

  // variable declarations
  var socialIconArr = [];
  var bio = $(".intro-text-holder p");

  // character limit for bio
  bio.text(bio.text().substring(0, 300));

  // scrolling header style change
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  $(".social-icon a").each(function () {
    socialIconArr.push($(this).attr("id"));
    return socialIconArr;
  });

  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    var headerWaypoint1 = parseInt($(".intro-banner").css("height"), 10);
    var headerWaypoint2 = headerWaypoint1 +
                          parseInt($(".header").css("height"), 10) +
                          parseInt($(".fp-carousel").css("height"), 10) +
                          parseInt($(".skills-projects").css("height"), 10);
    if (scroll >= headerWaypoint1 && scroll <= headerWaypoint2){
      $(".header").addClass("logo-past-waypoint");
      $(socialIconArr).each(function (index, value) {
        $("." + value + "-icon").addClass(value + "-past-waypoint");
      });
    } else {
      $(".header").removeClass("logo-past-waypoint");
      $(socialIconArr).each(function (index, value) {
        $("." + value + "-icon").removeClass(value + "-past-waypoint");
      });
    }
  });

  // smooth scroll function
  $("a[href*=#]:not([href=#])").click(function () {
    if (location.pathname.replace(/^\//,"") === this.pathname.replace(/^\//,"") && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
      if (target.length) {
        $("html,body").animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // Slick carousel plugin
  $(".fp-carousel").slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 800,
    sidesToShow: 1,
    draggable: false,
    adaptiveHeight: true
  });

})(jQuery);
