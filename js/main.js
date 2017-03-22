$(function() {

  $('.main__nav-button').click(openNav)

  $('.main__nav__overlay-close').click(closeNav)

  $('.main__nav__overlay-items').click(closeNav)

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
        scrollTop: $(".about-us").offset().top - 20
    }, 1000)
  })

})
