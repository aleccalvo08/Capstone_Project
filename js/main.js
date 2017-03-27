$(function() {

  // $(window).load(function() {
  //   $(".loading").fadeOut("slow");;
  // });

  setTimeout(function(){
    $(".loading").fadeOut("slow")
  }, 2200)

  $('.main__sub-button').click(openNav)

  $('.main__nav-button').click(openNav)

  $('.main__nav__overlay-close').click(closeNav)

  $('.main__nav__overlay-content').on("click", "a", function( event ) {
    closeNav()
  })

  $('.main__video-text').click(function() {
    $('.main__video__overlay').addClass('overlay-show')
    $('#videoJones').get(0).play()
    noScroll()
  })

  $('.main__video__overlay').click(function() {
    $(this).removeClass('overlay-show')
    $('#videoJones').get(0).pause()
    withScroll()
  })

  function openNav() {
    $('#myNav').addClass('overlay-show')
  }

  function closeNav() {
    $('#myNav').removeClass('overlay-show')
  }

  function noScroll() {
    $('body').addClass('no-scroll')
  }

  function withScroll() {
    $('body').removeClass('no-scroll')
  }

  $('.main__scroll-down').click(function() {
    $('html, body').animate({
        scrollTop: $(".about-us").offset().top - 100
    }, 1000)
  })

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#subNav').addClass('sub__nav-show')
    } else {
      $('#subNav').removeClass('sub__nav-show')
    }

  })

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#aboutData').removeClass('hide-about')
    } else {
      $('#aboutData').addClass('hide-about')
    }
  })

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('#aboutRelationship').removeClass('hide-about')
    } else {
      $('#aboutRelationship').addClass('hide-about')
    }
  })

  $(window).scroll(function() {
    if ($(this).scrollTop() > 450) {
      $('#aboutTalent').removeClass('hide-about')
    } else {
      $('#aboutTalent').addClass('hide-about')
    }
  })

  $('.footer__button-icon').click(function() {
    $('html, body').animate({scrollTop: '0px'}, 500)
  })


})
