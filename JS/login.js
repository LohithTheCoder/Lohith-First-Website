
var btn = document.querySelector("#login");
var username = undefined
console.log(localStorage.getItem("loggedIn"));
if (window.location.href == "login.html") {
    
    btn.addEventListener("click", function () {
        
        var validate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        username = document.getElementById("username").value;
        localStorage.setItem("1",username)
        var password_input = document.getElementById("password").value;
        var object = JSON.parse(localStorage.getItem(username))
        console.log(username, password_input);
        if (validate.test(password_input)) {
            var password1 = object.password;
            if (password1 !== undefined) {
                if (password1 == password_input) {
                    localStorage.setItem("loggedIn", true)
                    alert("A")
                } else {
                    alert("invalid password or/and username");
                    window.location.assign("login.html")
                };
            } else {
                alert("invalid password or/and username2");
                window.location.assign("login.html")
            };

        } else {
            alert("invalid password or/and username1");
            window.location.assign("login.html")
        };
    })
};