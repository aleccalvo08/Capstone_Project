$(function() {

  $('.main__nav-button').click(openNav)

  $('.main__nav__overlay-close').click(closeNav)

  function openNav() {
    $('#myNav').addClass('main__nav__overlay-show')
  }

  function closeNav() {
    $('#myNav').removeClass('main__nav__overlay-show')
  }

  $('.main__video-text').click(function() {
    $('.main__video').show()
  })


})
