

var btn = document.querySelector("#btn")


//functions


btn.addEventListener("click", function () {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    validate2 = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}/
    if (validate2.test(password)) {
        var user_Info = {
            "password":password,
            "points":0
        }
        localStorage.setItem(username, JSON.stringify(user_Info))
    } else {
        alert("invalid password")
        window.location.href = "sign-up-page.html"
    }
})


