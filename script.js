var users = [{
    name: "abc",
    email: "abc@gmail.com",
    status: "active",
    role: "Administrator",
    lastLogin: "2d ago",
    permission: "Valid"
}, {
    name: "def",
    email: "def@gmail.com",
    status: "inactive",
    role: "User",
    lastLogin: "3d ago",
    permission: "Valid"
}, {
    name: "ghi",
    email: "ghi@gmail.com",
    status: "active",
    role: "Administrator",
    lastLogin: "2d ago",
    permission: "Valid"
}, {
    name: "abc",
    email: "abc@gmail.com",
    status: "inactive",
    role: "User",
    lastLogin: "3d ago",
    permission: "Valid"
}, {
    name: "def",
    email: "def@gmail.com",
    status: "active",
    role: "Administrator",
    lastLogin: "2d ago",
    permission: "Valid"
}, {
    name: "ghi",
    email: "ghi@gmail.com",
    status: "inactive",
    role: "User",
    lastLogin: "3d ago",
    permission: "Valid"
}, {
    name: "abc",
    email: "abc@gmail.com",
    status: "active",
    role: "Administrator",
    lastLogin: "2d ago",
    permission: "Valid"
}, {
    name: "def",
    email: "def@gmail.com",
    status: "inactive",
    role: "User",
    lastLogin: "3d ago",
    permission: "Valid"
}, {
    name: "ghi",
    email: "ghi@gmail.com",
    status: "active",
    role: "Administrator",
    lastLogin: "2d ago",
    permission: "Valid"
}, {
    name: "abc",
    email: "abc@gmail.com",
    status: "inactive",
    role: "User",
    lastLogin: "3d ago",
    permission: "Valid"
}];

function getUser() {
    var table = "";
    var content = "";
    var x;
    for (x = 0; x < users.length; x++) {
        table += "<tr>";
        table += "<td><i class='fa fa-user-circle' style='font-size: 14px;color:grey;'> </i>&nbsp;&nbsp;&nbsp;" + users[x].name + "</td > ";
        table += "<td>" + users[x].email + "</td>";
        if (users[x].status == "active")
            table += "<td><div id='x" + x + "'class='status1' onclick='changeStatus(this);' > " + users[x].status + "</div></td > ";
        else
            table += "<td><div id='x" + x + "'class='status2' onclick='changeStatus(this);' > " + users[x].status + "</div></td>";
        table += "<td>" + users[x].role + "</td>";
        table += "<td>" + users[x].lastLogin + "</td>";
        table += "<td>" + users[x].permission + "</td>";
        table += "<td>...</td>";
        table += "</tr>";
    }
    document.getElementById("data").innerHTML += table;
}

function loadMain() {
    var a = document.getElementById("users");
    var d = document.getElementById("main");
    a.style.display = "none";
    d.style.display = "block";
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
    var d = document.getElementById("main");
    a.style.display = "block";
    d.style.display = "none";
}