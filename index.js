function myFunction() {
    var table = document.getElementById("myTable");
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var handle = document.getElementById("handle").value;

    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 =row.insertCell(2);

    cell1.innerHTML =firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = handle;

  }

