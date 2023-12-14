let parentPath="AASProjectWebPro"; //isi path parent dari folder backend

$('#logout').on('click', function() {
    var userConfirmed = confirm('Apakah anda yakin ingin logout?');
    if(userConfirmed){
        localStorage.removeItem('token');
        window.location.href="login.html";
    }
    
  });