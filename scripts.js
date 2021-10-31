let userLogin = function () {
    let form = document.getElementById("login-form");
    let email = form.elements.namedItem("email").value;
    let password = form.elements.namedItem("password").value;
    let credentials = "email=" + email + "&password=" + password;
    const xml = new XMLHttpRequest();

        xml.onreadystatechange = function () {
        if (xml.response == "criar-conta") {
            location.href = 'criar-conta.html';
            }
            }
        if (email == "douglas@gmail.com") {
            alert("Parabéns, você já está cadastrado!");  // display string message
            console.log(xml.response);
        }
        else{
            console.log("deu certo");
            };
    xml.open("POST", "http://127.0.0.1:5000/login");
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(credentials);
};