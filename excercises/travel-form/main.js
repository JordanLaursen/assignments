


document.flight.addEventListener("submit", function(e) {
    e.preventDefault();
    var firstName = document.flight.firstName.value;
    var lastName = document.flight.lastName.value;
    var age = document.flight.age.value;
    var gender = document.flight.gender.value;
    var location = document.flight.location.value;
    var dietaryRestrictions = document.flight.dietaryRestrictions;
    var diet = "";
    for (var i = 0; i < dietaryRestrictions.length; i++) {
        if (dietaryRestrictions[i].checked) {
            diet += dietaryRestrictions[i].value + "   ";
      }
    }
    alert("First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Location: " + location + "\n" + "Dietary Restrictions: " + diet);
});
