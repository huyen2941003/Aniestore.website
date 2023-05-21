function enableEdit() {
    document.getElementById('name').contentEditable = true;
    document.getElementById('idCell').contentEditable = true;
    document.getElementById('phoneCell').contentEditable = true;
    document.getElementById('addressCell').contentEditable = true;
    document.getElementById('editButton').classList.add('hiden');
    document.getElementById('saveButton').classList.remove('hiden');
}

function saveChanges() {
    document.getElementById('name').contentEditable = false;
    document.getElementById('idCell').contentEditable = false;
    document.getElementById('phoneCell').contentEditable = false;
    document.getElementById('addressCell').contentEditable = false;
    document.getElementById('editButton').classList.remove('hiden');
    document.getElementById('saveButton').classList.add('hiden');
    document.getElementById('successMessage').style.display = 'inline-block';
    setTimeout(function() {
    document.getElementById('successMessage').style.display = 'none';
    }, 3000);
}


function enableEdit2() {
    document.getElementById("nameCell").contentEditable = true;
    document.getElementById("birthdayCell").contentEditable = true;
    document.getElementById("genderCell").contentEditable = true;
    document.getElementById("emailCell").contentEditable = true;
    document.getElementById("editButton2").classList.add("hiden2");
    document.getElementById("saveButton2").classList.remove("hiden2");
}

function saveChanges2() {
    document.getElementById("nameCell").contentEditable = false;
    document.getElementById("birthdayCell").contentEditable = false;
    document.getElementById("genderCell").contentEditable = false;
    document.getElementById("emailCell").contentEditable = false;
    document.getElementById("editButton2").classList.remove("hiden2");
    document.getElementById("saveButton2").classList.add("hiden2");
    document.getElementById('successMessage').style.display = 'inline-block';
    setTimeout(function() {
    document.getElementById('successMessage').style.display = 'none';
    }, 3000);
}
function enableEdit3() {
    document.getElementById("introduce").contentEditable = true;
    document.getElementById("editButton3").classList.add("hiden3");
    document.getElementById("saveButton3").classList.remove("hiden3");
}
function saveChanges3() {
    document.getElementById("introduce").contentEditable = false;
    document.getElementById("editButton3").classList.remove("hiden3");
    document.getElementById("saveButton3").classList.add("hiden3");
    document.getElementById('successMessage').style.display = 'inline-block';
    setTimeout(function() {
    document.getElementById('successMessage').style.display = 'none';
    }, 3000);
}