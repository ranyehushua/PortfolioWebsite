function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$('#formEmail').focusout(function() {
  if (!isEmail($(this).val())) {
    $('#notEmail').show();
  } else {
    $('#notEmail').hide();
  }
});

$('#contactForm').on('submit', function(event){
    if ($('#formName').val()=='' || $('#formName').val()=='' || $('#emailMessage').val()==''){
        event.preventDefault();
        $('#formError').text('Please make sure all fields are complete before submitting').show();
    }else{
        // do nothing and let the form post
    }
});