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
  var fetched_data = document.getElementById('fetched_data');

  var indx = 0;
  var rowTable = '<table cellpadding="0" cellspacing="0">';
  rowTable += '<tr><th>'+'Field'+'</th><th>'+'Value'+'</th></tr>';

  $.each(contact,function(key,value){
    if (indx%2 == 0) {
      rowTable += '<tr><td>'+key+'</td><td>'+value+'</td></tr>';
    }else{
      rowTable += '<tr class="odd"><td>'+key+'</td><td>'+value+'</td></tr>';
    }
    indx +=1;
  });

  rowTable += '</table>';
  fetched_data.innerHTML = rowTable;
}
