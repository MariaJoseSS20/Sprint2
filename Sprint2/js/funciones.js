document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    clearErrors();
    if(validateForm()) {
     
      submitForm();
    }
  });

  function validateForm() {
  
    let isValid = true; 
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();


    if(!validateEmail(email)) {
      setError('errorEmail', 'El email no es válido, intente nuevamente.');
      isValid = false;
    }

    if(!validateLength(mensaje, 26)) {
      setError('errorArea', 'El mensaje debe ser de al menos 26 caracteres, intente nuevamente');
      isValid = false;
    }

    return isValid;
  }

  function validateLength(value, minLength) {
    return value.length >= minLength;
  }

  function validateEmail(email) {
   
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  function setError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';

  }

 
  function clearErrors() {

    const errorElements = document.querySelectorAll('.invalid-feedback');
  
    errorElements.forEach((element) => {
      element.style.display = 'none';
    });
  }


  function submitForm() {
    alert(' ¡GRACIAS! El formulario se ha enviado correctamente.')
  }
});