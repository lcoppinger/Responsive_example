
function navigation () {
  var navbar = $(".main--nav");

  $(navbar).hover(function(){

    if ($(this).hasClass("menu--collapse")) {
      $(this).removeClass("menu--collapse");
      $(".side--menu").attr("aria-hidden","true");
    }else {
      $(this).addClass("menu--collapse");
      $(".side--menu").attr("aria-hidden","false");
    }

  });
}

$(document).ready(function(){
  if (screen.width >= 768) {
    $('#fullpage').fullpage({
      anchors: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fifthSlide'],
      menu: '#menu',
      scrollOverflow: true,

      afterLoad: function (anchorLink, index) {
        var loadedSection = $(this);

        //using index
        if (index == 1) {
          $(".custom--fade").removeClass("fadeOut").addClass("fadeIn");
        } else {
          $(".custom--fade").removeClass("fadeIn").addClass("fadeOut");
        }

        if (index == 2) {
          $(".custom--fade1").removeClass("fadeOut").addClass("fadeInUp");
        } else {
          $(".custom--fade1").removeClass("fadeInUp").addClass("fadeOut");
        }

        if (index == 3) {
          $(".custom--fade2").removeClass("fadeOut").addClass("fadeInUp");
        } else {
          $(".custom--fade2").removeClass("fadeInUp").addClass("fadeOut");
        }

        if (index == 4) {
          $(".pwc-icon img").attr("src", 'Images/pwc_logo--inverse.svg');
          $(".side--menu li").addClass("inverse");
          $(".custom--fade3").removeClass("fadeOut").addClass("fadeInUp");

        } else {
          $(".pwc-icon img").attr("src", 'Images/pwc_logo.svg');
          $(".side--menu li").removeClass("inverse");
          $(".custom--fade3").removeClass("fadeInUp").addClass("fadeOut");
        }

        if (index == 5) {
          $(".custom--fade4").removeClass("fadeOut").addClass("fadeIn");
        } else {
          $(".custom--fade4").removeClass("fadeIn").addClass("fadeOut");
        }
      }
    });
  }


  //navigation
  $(window).resize(function(){
    if (screen.width >= 768) {
      navigation()
    } else {
      $(".main--nav").hide();
    }
  });

  $(window).load(function(){
    if (screen.width >= 768) {
      navigation()
    } else {
      $(".main--nav").hide();
    }
  });



  //scrolldown
  $(".scroll-btn").click(function(){
    $.fn.fullpage.moveSectionDown();
  });

  //Modal
try {
  var isshow = localStorage.getItem('isshow');
  if (isshow == null) {
    localStorage.setItem('isshow', 1);
    $(".non_cookie").hide();
  } else {
    $("#QuestionPrompt").remove();
    $(".cookie").hide();
  }
} catch (e) {
  $("#QuestionPrompt").remove();
  $(".cookie").hide();
}

});
