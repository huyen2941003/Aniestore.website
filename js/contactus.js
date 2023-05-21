/* js contactus */
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contact');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.querySelector('input[type="text"]').value;
        var email = document.querySelector('input[type="email"]').value;
        var phone = document.querySelector('input[type="tel"]').value;
        var message = document.querySelector('textarea').value;
        if (name === '' || email === '' || phone === '' || message === '') {
            alert('Vui lòng điền đầy đủ thông tin.');
        } 
        else {
            alert('Gửi thành công');
            document.querySelectorAll('#contact input[type="text"]').forEach(function(input) {
                contactForm.reset();
            });
        }
    });
});