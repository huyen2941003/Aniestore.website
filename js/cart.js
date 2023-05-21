var icofontcart = document.querySelector(".icofont-cart");
var cart_items = document.querySelector("#cart-items");
var closeCart = document.querySelector(".closeShopping");
var addCart = document.querySelectorAll(".add-item-cart");
var deletedItems = []; // Mảng lưu các sản phẩm đã xóa

icofontcart.addEventListener("click", function() {
   cart_items.classList.toggle('hiden');
});
cart_items.addEventListener("click", function(event) {
   event.stopPropagation();
});
// document.querySelector("#dong").addEventListener("click", function() {
//    cart_items.classList.add('hiden');
// })
closeCart.addEventListener('click', function() {
   cart_items.classList.add('hiden');
});

addCart.forEach(function(button, index) {
   button.addEventListener("click", function(event) {
      var btnItem = event.target;
      var product = btnItem.parentElement.parentElement;
      var productImg = product.querySelector("img").src;
      var productName = product.querySelector(".intro p").innerHTML;
      var productPrice = product.querySelector(".hiden span").innerHTML;
      addItemsCart(productImg, productName, productPrice);
   });
});

function addItemsCart(productImg, productName, productPrice) {
   var cartItem = document.querySelectorAll('.col');
   var isNewItem = true;
   for (var i = 0; i < cartItem.length; i++) {
      var productNameAdd = cartItem[i].querySelector("#pName");
      if (productNameAdd && productNameAdd.innerHTML === productName) {
         var inputQuantity = cartItem[i].querySelector('input');
         inputQuantity.value = parseInt(inputQuantity.value) + 1;
         calculateTotal();
         hartInner();
         isNewItem = false;
         break;
      }  
   }
   if (isNewItem) {
      var addtr = document.createElement("tr");
      var trContent = '<div class="col" style="display: flex; justify-content: space-between;font-size: 14px; text-align: center;width: 500px; margin-bottom: 20px; height: 100%;"><img src="'+productImg+'" alt="" style="width: 20%;height: 90px; border-radius: 50%; margin-left: 20px; "><span id = "pName" style="margin-top: 20px; display: none;">'+productName+'</span><p class = "price" style="margin-top: 20px;text-transform: none; ">'+productPrice+'</p><input type="number" value="1" min="1" style="outline: none; width: 40px; height: 20px; text-align: center; margin-right: 40px; margin-top: 20px;"><p class = "delete" style="margin-right: 45px; margin-top: 20px; cursor: pointer;">Xóa</p></div>';
      addtr.innerHTML = trContent;
      var cartTable = document.querySelector('.ListCart');
      cartTable.append(addtr);
      hartInner();
      calculateTotal();
      deleteItem();     
   }
   alert("Thêm thành công!")
   // showAlertDialog("Thêm thành công!");
}

var totalPrice = 0;

function calculateTotal() {
   var cartItem = document.querySelectorAll('.col');
   var totalB = 0;
   for (var i = 0; i < cartItem.length; i++) {
      inputValue = cartItem[i].querySelector('input').value;
      inputPrice = cartItem[i].querySelector('.price').innerHTML;
      totalA = inputValue * inputPrice * 1000;
      totalB += totalA;
   }
   totalPrice = totalB;
var cartTotalA = document.querySelector('.total .money');
   console.log(cartTotalA);
   cartTotalA.innerHTML = totalPrice.toLocaleString('de-DE');
   inputChange();
}

function deleteItem() {
   var cartTable = document.querySelector('.ListCart');
   cartTable.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete')) {
         var cartDelete = event.target;
         var cartItem = cartDelete.closest('.col');
         var itemPrice = parseInt(cartItem.querySelector('.price').innerText);
         totalPrice -= itemPrice * 1000;
         document.querySelector('.total .money').innerText = totalPrice.toLocaleString('de-DE');
         cartItem.remove();
         console.log(cartItem);
         hartInner();
         calculateTotal();
         var productName = cartItem.querySelector("#pName").innerHTML;
         if (!deletedItems.includes(productName)) {
            deletedItems.push(productName);
            alert("Xóa thành công!");
            // showAlertDialog("Xóa thành công!");
         }
      }
   });
}

function hartInner() {
   var hart = document.querySelector('.hart');
   var cartItem = document.querySelectorAll('.col');
   hart.innerHTML = cartItem.length;
}

function inputChange() {
   var cartItem = document.querySelectorAll('.col');
   if (parseInt(document.querySelector('.total .money').innerText) != 0) {
      for (var i = 0; i < cartItem.length; i++) {
         var valueChange = cartItem[i].querySelector('input');
         valueChange.addEventListener("change", function() {
            calculateTotal();
            hartInner();
         });
      }
   }
}

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
         var fullName = document.querySelector('input[type="text"][placeholder="vd: Nguyễn Thị Thu Huyền"]');
         var phoneNumber = document.querySelector('input[type="text"][placeholder="vd: 0123456789"]');
         var productName = document.querySelector('input[type="test"][placeholder="vd: Nguyễn Thị Thu Huyền"]');
         var quantity = document.querySelector('input[type="number"][placeholder="vd: 0123456789"]');
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

   formContainer.addEventListener('click', function(event) {
      event.stopPropagation();
   });

   overlaydathang.addEventListener('click', function() {
      formContainer.style.display = 'none';
      overlaydathang.style.display = 'none';
   });
});