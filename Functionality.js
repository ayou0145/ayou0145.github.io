// User cannot continue if they are younger than 10 years of age
function Youngerthan13() {
    document.getElementById('secondPageAlertText').textContent = "Sorry, You're unable to open this account online. Please contact your nearest branch.";
    
}
// User cannot continue without Parent
function NoIamnot(){
    document.getElementById('ThirdpageAlertText').textContent ="Sorry, without the presence of an adult you are unable to open an account.";
}

// Alert to remind user then cannot continue without following requirements for form fill in 
function formFillInAlert() {
    let textBox1 = document.getElementById("TextBox1");
    let textBox3 = document.getElementById("TextBox3");
    let textBox4 = document.getElementById("TextBox4");
    console.log(textBox1.value);
    if (textBox1.value == "" || textBox3.value == "" || textBox4.value == "") {
        document.getElementById('ThirdpageAlertText').textContent="You may not proceed without filling in all required boxes"   
    } else {
        document.location.href = "Page 5.html"
    }


}
// Changing of Yes and No colours, when Yes is pressed it goes green and the no can't be clicked simultaneously- no goes red
function ChangeColorYes() {
    document.getElementById("YesButton").style.backgroundColor = "green"; 
    document.getElementById("NoButton").style.backgroundColor = "white"; 
}

function ChangeColorNo() {
    document.getElementById("YesButton").style.backgroundColor = "white"; 
    document.getElementById("NoButton").style.backgroundColor = "red"; 
}

function submitInformation() {
// This function makes sure that both alerts can appear simultaneously, not just one over the other
    let a = UserAlert();
    let b = PasswordAlert()
    if (a && b) {
        document.location.href = "page7.html"
    }
}

// Alert to remind user then cannot continue without following requirements for form fill in 
function UserAlert() {
// This function recognises when the  length of the username is shorter than 4 letters, and sends through alert to user
    let Username = document.getElementById("Username");
    if (Username.value.length < 4) {
        document.getElementById('UserAlertText').textContent = "Sorry, you're Username must be longer";
        return false; 
    }

    document.getElementById('UserAlertText').textContent = "";
    return true;
}

function PasswordAlert() {
    let Password = document.getElementById("Password");
    console.log(Password.value.length);
    if (Password.value.length < 9) {
        document.getElementById('PasswordAlertText').textContent="Sorry, You're password is too short"
        return false;
    }


    document.getElementById('PasswordAlertText').textContent=""
    return true;
}

// Alert when bank details are not entered 
function CardNumberAlert() {
    let CardNumber = document.getElementById("CardNumber");
    let CardPin = document.getElementById("CardPin");
    if (CardNumber.value == "" || CardPin.value == "" ) {
        document.getElementById('CardNumberAlertText').textContent="Sorry, you cannot create an account without entering your card details"   
    } else {
        document.location.href = "Page 6.html"
    }
}