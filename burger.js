//Burger Menu
jQuery('.burger').on('click', function(){
    jQuery(this).toggleClass('open');
    jQuery('.main-navigation').toggleClass('open');
    jQuery('#masthead').toggleClass('open');
});