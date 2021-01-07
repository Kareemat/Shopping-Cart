let fadeTime = 300;

$('.remove button').click(function(){
  removeItem(this);
});

function removeItem(removeButton) {
  let productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    calculateCart();
  });
}

function calculateCart(){
 let subtotal =0;
 $('.cart-products').each(function(){
    subtotal += parseInt($(this).children('.total').text());
  });
let total = subtotal;
$('.subtotal-value').fadeOut(fadeTime, function() {
      $('#cart-subtotal').html(total);
      $('.subtotal-value').fadeIn(fadeTime);
    });
$('.total-value').fadeOut(fadeTime, function(){
      $('#cart-total').html(total);
      $('.total-value').fadeIn(fadeTime);
});
}

$('.quantity input').change(function() {
  updateQuantity(this);
});

function updateQuantity(quantityInput){
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  productRow.children('.subtotal').each(function(){
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice);
      calculateCart();
      $(this).fadeIn(fadeTime);
    });
  });
}