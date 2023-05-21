/* js icon timkiem */

let menu = document.querySelector('#search-icon')
let header = document.querySelector('.header');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search').classList.toggle('active');
    
}

/* js thongbao trang chu */
var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.close');
var modalImage = document.querySelector('.modal img');
function closeModal() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
}
overlay.addEventListener('click', function(event) {
    event.stopPropagation();
    closeModal();
});
closeBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    closeModal();
});
modalImage.addEventListener('click', function(event) {
    event.stopPropagation();
});

/* js đơn đặt hàng */
document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('overlay-dathang').style.display = 'block';
    document.getElementById('formContainer').style.display = 'block';
});
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    var closeButtondathang = document.getElementById('closeButton');
    var overlaydathang = document.getElementById('overlay-dathang');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var fullName = document.querySelector('input[type="text"]');
        var phoneNumber = document.querySelector('input[type="text"]');
        var productName = document.querySelector('input[type="test"]');
        var quantity = document.querySelector('input[type="number"]');
        var ngayDatHang = document.querySelector('input[type="datetime-local"]');
        var ngayNhanHang = document.querySelectorAll('input[type="datetime-local"]')[1];
        var diaChi = document.getElementById('địa chỉ');
        var ghiChu = document.querySelectorAll('textarea')[1];
        if (fullName.value.trim() === '' || phoneNumber.value.trim() === '' || productName.value.trim() === '' ||
            quantity.value.trim() === '' || ngayDatHang.value.trim() === '' || ngayNhanHang.value.trim() === '' ||
            diaChi.value.trim() === '' || ghiChu.value.trim() === '') {
                alert('Vui lòng nhập đầy đủ thông tin.');
        } else if (quantity.value < 0) {
            alert('Số lượng không được bé hơn 0.');
        } else if (phoneNumber.value.length !== 10 || !/^\d+$/.test(phoneNumber.value)) {
            alert('Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại có 10 chữ số.');
        } else if (new Date(ngayNhanHang.value) <= new Date(ngayDatHang.value)) {
            alert('Ngày nhận hàng phải lớn hơn ngày đặt hàng.');
        } else {
            alert('Đặt hàng thành công');
            form.reset();
            formContainer.style.display = 'none';
            overlaydathang.style.display = 'none';
        }
    });
    closeButtondathang.addEventListener('click', function() {
    formContainer.style.display = 'none';
    overlaydathang.style.display = 'none';
    });
});

/*js thay dổi ảnh */
const images = document.querySelectorAll('.image');
images.forEach((image) => {
    const originalSrc = image.src;
    const hoverSrc = image.dataset.hover;
    image.addEventListener('mouseover', function() {
        image.src = hoverSrc;
    });
    image.addEventListener('mouseout', function() {
        image.src = originalSrc;
    });
});

/* js footer */
const boxMail = document.querySelector('.box-mail');
const emailInput = boxMail.querySelector('input[type="text"]');
const subscribeBtn = boxMail.querySelector('button');
subscribeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const email = emailInput.value;
    if (isValidEmail(email)) {
        alert('Đăng ký thành công!');
    } else {
        alert('Email không hợp lệ!');
    }
});
function isValidEmail(email) {
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email);
}


