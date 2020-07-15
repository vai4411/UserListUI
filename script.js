var users = [{
    name: "abc",
    email: "abc@gmail.com",
    status: "Active",
    role: "Administrator",
    lastLogin: "2d ago",
    permission: "Valid"
}, {
    name: "def",
    email: "def@gmail.com",
    status: "Inactive",
    role: "User",
    lastLogin: "3d ago",
    permission: "Valid"
}, {
    name: "ghi",
    email: "ghi@gmail.com",
    status: "Active",
    role: "Administrator",
    lastLogin: "2d ago",
    permission: "Valid"
}, {
    name: "abc",
    email: "abc@gmail.com",
    status: "Inactive",
    role: "User",
    lastLogin: "3d ago",
    permission: "Valid"
}, {
    name: "def",
    email: "def@gmail.com",
    status: "Active",
    role: "Administrator",
    lastLogin: "2d ago",
    permission: "Valid"
}, {
    name: "ghi",
    email: "ghi@gmail.com",
    status: "Inactive",
    role: "User",
    lastLogin: "3d ago",
    permission: "Valid"
}, {
    name: "abc",
    email: "abc@gmail.com",
    status: "Active",
    role: "Administrator",
    lastLogin: "2d ago",
    permission: "Valid"
}, {
    name: "def",
    email: "def@gmail.com",
    status: "Inactive",
    role: "User",
    lastLogin: "3d ago",
    permission: "Valid"
}, {
    name: "ghi",
    email: "ghi@gmail.com",
    status: "Active",
    role: "Administrator",
    lastLogin: "2d ago",
    permission: "Valid"
}, {
    name: "abc",
    email: "abc@gmail.com",
    status: "Inactive",
    role: "User",
    lastLogin: "3d ago",
    permission: "Valid"
}, {
    name: "def",
    email: "def@gmail.com",
    status: "Inactive",
    role: "User",
    lastLogin: "3d ago",
    permission: "Valid"
}, {
    name: "ghi",
    email: "ghi@gmail.com",
    status: "Active",
    role: "Administrator",
    lastLogin: "2d ago",
    permission: "Valid"
}];

function getUser() {
    var table = "";
    var content = "";
    var x;
    for (x = 0; x < users.length; x++) {
        table += "<tr class='table1' style='outline: thin solid lightgrey;' > ";
        table += "<td style='color:#6628F5'><i class='fa fa-user-circle' style='font-size: 14px;color:grey;'> </i>&nbsp;&nbsp;&nbsp;" + users[x].name + "</td > ";
        table += "<td>" + users[x].email + "</td>";
        if (users[x].status == "Active")
            table += "<td><div id='x" + x + "'class='status1' onclick='changeStatus(this);' > " + users[x].status + "</div></td > ";
        else
            table += "<td><div id='x" + x + "'class='status2' onclick='changeStatus(this);' > " + users[x].status + "</div></td>";
        table += "<td>" + users[x].role + "</td>";
        table += "<td>" + users[x].lastLogin + "</td>";
        table += "<td><b>" + users[x].permission + "</td>";
        table += "<td><input type='button' id='option' value='...'></input></td > ";
        table += "</tr>";
    }
    document.getElementById("data").innerHTML += table;
}

function loadMain() {
    var a = document.getElementById("users");
    a.style.display = "none";
}

function myFunction(id) {
    if (document.getElementById(id).className == "my-hide")
        document.getElementById(id).className = "my-show";
    else
        document.getElementById(id).className = "my-hide";
}

function changeStatus(id) {
    if (id.className == "status1") {
        id.className = "status2";
        id.innerHTML = "inactive";
    } else {
        id.className = "status1";
        id.innerHTML = "active";
    }
}

function loadUsers() {
    var a = document.getElementById("users");
    a.style.display = "block";
}