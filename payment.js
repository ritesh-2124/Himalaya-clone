document.querySelector("#submitbtn").addEventListener("click", myfunction);
var detailes = JSON.parse(localStorage.getItem("address")) || [];

function myfunction(event) {
  event.preventDefault();
  var fname = document.querySelector("#first").value;
  var lname = document.querySelector("#last").value;
  var address = document.querySelector("#add").value;
  var phone = document.querySelector("#phone").value;
  var city = document.querySelector("#city").value;
  var country = document.querySelector("#country").value;

  var obj = {
    fname: fname,
    lname: lname,
    address: address,
    phone: phone,
    city: city,
    country: country,
  };
  detailes.push(obj);
  console.log(obj);
  localStorage.setItem("address", JSON.stringify(detailes));

  if (
    obj.fname == "" ||
    obj.lname == "" ||
    obj.address == "" ||
    obj.phone == "" ||
    obj.city == "" ||
    obj.country == ""
  ) {
    alert("Fill Correct Information");
  } else {
    document.querySelector("#submitbtn").addEventListener("click", function () {
      Swal.fire("Thank You , Order Confirmed");
    });
  }
}
