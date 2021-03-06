$(function() {

  ////////// Mobile Menu //////////

  $('a.menu-icon').click(function() {
    $('#menu-links').slideToggle();
  });

  // fix hidden links on window resize

  $(window).resize(function() {
    if ($(window).width() > 700) {
      $('#menu-links').removeAttr('style');
    }
  });

  ///// CONTACT FORM VALIDATION ///

  function validateName(fullname) {
    if (fullname.length > 2){
      $('#fullname').removeClass('error');
      $('#fullname-error').hide();
      return true; //pass
    }
    else{
      $('#fullname').addClass('error');
      $('#fullname-error').show();
      return false;//fail
    }
  }

  function validateEmail(email){
    var re = /.+@.+\..+/i
    if (re.test(email)) {
      $('#email').removeClass('error');
      $('#email-error').hide();
      return true; //pass
    }
    else{
      $('#email').addClass('error');
      $('#email-error').show();
      return false;//fail
    }
  }

  function validateMessage(message){
    if (message.length > 0) {
      $('#message').removeClass('error');
      $('#message-error').hide();
      return true; //pass
    }
    else {
      $('#message').addClass('error');
      $('#message-error').show();
      return false;//fail
    }
  }

  $('form').submit(function(event){

    var fullname = $('#fullname').val(),
        email = $('#email').val(),
        message = $.trim($('#message').val());


        if (validateName(fullname) & validateEmail(email) & vaildateMessage(message)){
          return true; //submit form
        }

        else {
          event.preventDefault(); //prevent default action (submission)
        }




    
  });

});