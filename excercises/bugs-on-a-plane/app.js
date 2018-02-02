// var form = document.getElementByID("airline-form");
// var submit = document.getElementByID("submit");
// var query = document.querySelector;
// var button = document.getElementByID("")
document.airlineForm.submit.addEventListener("click", function(e) {
    e.preventDefault();
    var firstName = document.airlineForm.firstName.value;
    var lastName = document.airlineForm.lastName.value;
    var age = document.airlineForm.age.value;
    var gender = document.airlineForm.gender.value;
    var location = document.airlineForm.travelLocation.value;
    var diet = [];
    if (document.airlineForm.vegan.checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (document.airlineForm.gluten.checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (document.airlineForm.paleo.checked) {
        diet.push(document.getElementById('paleo').value);
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
});


// submit.addEventListener("click", formAlert);
