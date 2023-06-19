"use strict";
const fileText = document.getElementById("product-file-name");
const product = document.getElementById("product");
const referralEarning = document.getElementById("referral-earnings");
referralEarning.textContent = '$' + 1456;

if(product.files.length >= 1){
    fileText.textContent = product.files[0].name;
}

// aside function => open
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// aside functionm <= close


// modal box script =>
const cancelBtn = document.querySelector(".close");
const modalBox = document.getElementById("myModal");
const display = () =>{
    modalBox.style.display = "block";
  }
  const cancel = () => {
    modalBox.style.display = "none";
  }
//   product form =>
const inputProductFile = document.getElementById("product-file");
// alert(inputProductFile.file)
  // modal box script <=