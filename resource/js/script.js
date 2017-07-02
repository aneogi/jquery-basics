function saveToLocalStorage(){
  var emailField = document.getElementById('email');
  emailField.setCustomValidity(emailField.value + " is invalid!. Please try again !")

  var contact = {'email': document.getElementById('email').value, 'telephone': document.getElementById('telephone').value,
                 'url': document.getElementById('url').value, 'range': document.getElementById('range').value };
   console.log(JSON.stringify(contact));
   localStorage.setItem('contact', JSON.stringify(contact));
}

function fetchFromLocalStorage(){
  var contact = JSON.parse(localStorage.getItem('contact'));
  //var fetched_data = document.getElementById('fetched_data');

  console.log('contact' + '=> ' + contact );

  $.each(contact,function(key,value){
    console.log(key + ': ' + value);

  });

/*  $(contact).each(
    function(index){
      console.log(index + ': ' + $(this).text());
    }
  );*/

  //  $('#fetched_data').append('<table><tr>')
  //  $.each(contact, function(key,value){

  //});
}
