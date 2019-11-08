function Youngerthan13() {
    document.getElementById('secondPageAlertText').textContent = "Sorry, You're unable to open this account online. Please contact your nearest branch.";
    
}
function NoIamnot(){
    document.getElementById('ThirdpageAlertText').textContent ="Sorry, without the presence of an adult you are unable to open an account.";
}

function formFillInAlert() {
    // alert("Hit me baby one more time");
    let textBox1 = document.getElementById("TextBox1");
    let textBox2 = document.getElementById("TextBox2");
    let textBox3 = document.getElementById("TextBox3");
    let textBox4 = document.getElementById("TextBox4");
    console.log(textBox1.value);
    if (textBox1.value == "" || textBox2.value == "" || textBox3.value == "" || textBox4.value == "") {
        document.getElementById('ThirdpageAlertText').textContent="You may not proceed without filling in all required boxes"   
    } else {
        console.log("I love Alex soooooooooooooooo much!")
        document.location.href = "Page 5.html"
        // go to the page we want... IDK how to do that yet, it probably exists, just google it *shrugging emoji*
    }
}