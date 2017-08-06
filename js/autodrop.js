window.onresize = navigationResize;
navigationResize();
function navigationResize() {
  $('#nav li.more').before($('#overflow > li'));
  var $navItemMore = $('#nav > li.more'),
    $navItems = $('#nav > li:not(.more)'),
    navItemMoreWidth = navItemWidth = $navItemMore.width(),
    windowWidth = $(window).width(),
    navItemMoreLeft, offset, navOverflowWidth;
  $navItems.each(function() {
    navItemWidth += $(this).width();
  });
  navItemWidth > windowWidth ? $navItemMore.show() : $navItemMore.hide();
  while (navItemWidth > windowWidth) {
    navItemWidth -= $navItems.last().width();
    $navItems.last().prependTo('#overflow');
    $navItems.splice(-1, 1);
  }
  navItemMoreLeft = $('#nav .more').offset().left;
  navOverflowWidth = $('#overflow').width();
  offset = navItemMoreLeft + navItemMoreWidth - navOverflowWidth;
  $('#overflow').css({
    'left': offset
  });
}
function showOverflow() {
  document.getElementById("overflow").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btnmore')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}