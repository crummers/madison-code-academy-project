$(document).ready(() => {
  const $cart = $('#cart')
  const $account = $('#account')
  const $help = $('#help')
  const $dropDown = $('.dropdown-menu')

  $cart.on('mouseover', () => {
    $('#cartMenu').show();
  });
  $account.on('mouseover', () => {
    $('#accountMenu').show();
  });
  $help.on('mouseover', () => {
    $('#helpMenu').show();
  });

  $dropDown.on('mouseleave', () => {
    $dropDown.hide();
  });
});
