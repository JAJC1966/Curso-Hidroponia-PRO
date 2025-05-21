document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name && email) {
        alert(`¡Gracias por registrarte, ${name}! Nos pondremos en contacto contigo en ${email}.`);
        this.reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
