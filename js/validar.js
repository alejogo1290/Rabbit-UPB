window.onload = function () {

    var form = document.getElementById("formulario");
 
    var pristine = new Pristine(form);
 
    form.addEventListener('submit', function (e) {
       e.preventDefault();
       var valid = pristine.validate();
       //alert('Form is valid: ' + valid);
       form.classList.add("was-validated")
 
    });

    form.addEventListener('reset', function (e) {
        form.classList.remove("was-validated")
 
    });
 
 };