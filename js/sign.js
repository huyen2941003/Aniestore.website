$(document).ready(function() {
  $('#sign').on('click', function() {
    var email = $('#email').val();
    var password = $('#pass').val();

    if (email.trim() == '') {
      alert('Vui lòng nhập email');
      return false;
    } else  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Email không hợp lệ.');
      return false;
    }
    else if (password.trim() == '') {
      alert('Vui lòng nhập mật khẩu');
      return false;
    } else if (password.length < 6) {
      alert('Mật khẩu phải có ít nhất 6 ký tự.');
      return false;
    }
  });
    $('.eye').click(function() {
      var passwordField = $('#pass');
      var passwordFieldType = passwordField.attr('type');
      if (passwordFieldType == 'password') {
        passwordField.attr('type', 'text');
        $('.eyeOpen').removeClass('hiden');
        $('.eyeClose').addClass('hiden');
      } else {
        passwordField.attr('type', 'password');
        $('.eyeOpen').addClass('hiden');
        $('.eyeClose').removeClass('hiden');
      }
    });
});

const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');
overlayBtn.addEventListener('click', ()=>{
  container.classList.toggle('right-panel-active');
  overlayBtn.classList.remove('btnScaled');
  window.requestAnimationFrame(()=> {
    overlayBtn.classList.add('btnScaled');
  })
});

/* js validate */
$(document).ready(function() {
  $('#register').click(function(event) {
    var username = $('input[placeholder="Tên tài khoản"]').val();
    var email = $('input[placeholder="@gmail.com"]').val();
    var phone = $('input[placeholder="Số điện thoại"]').val();
    var password = $('input[placeholder="Mật khẩu"]').val();
    var confirm_password = $('input[placeholder="Nhập lại mật khẩu"]').val();

  // Kiểm tra giá trị của các trường input
    if (username == '') {
      alert('Vui lòng nhập tên tài khoản');
      event.preventDefault();
    } else if (username.length < 3) {
      alert('Tên tài khoản phải có ít nhất 3 ký tự.');
      return false;
    }
    else if (email == '') {
      alert('Vui lòng nhập địa chỉ email');
      event.preventDefault();
    }else  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Email không hợp lệ.');
      return false;
    }
    else if (phone == '') {
      alert('Vui lòng nhập số điện thoại');
      event.preventDefault();
    } else if (!phone.trim() || !/^[0-9]{10}$/.test(phone)) {
      alert('Số điện thoại không hợp lệ.');
      return false;
    }
    else if (password == '') {
      alert('Vui lòng nhập mật khẩu');
      event.preventDefault();
    }
    else if (password.length < 6) {
      alert('Mật khẩu phải có ít nhất 6 ký tự.');
      return false;
    }
    else if (confirm_password == '') {
      alert('Vui lòng nhập lại mật khẩu');
      event.preventDefault();
    } 
    else if (password != confirm_password) {
      alert('Mật khẩu không khớp');
      event.preventDefault();
    }
    else {
      alert('Đăng ký thành công!');
    }
  });
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const hideSlides = () => {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
};
const showNextSlide = () => {
    hideSlides();
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
};
setInterval(showNextSlide, 3000);