
function check()
{
    let firstname= document.getElementById("firstname").value;

    let lastname= document.getElementById("lastname").value;

    let adress= document.getElementById("adress").value;

    let email= document.getElementById("email").value;

    let password= document.getElementById("password").value;

    let comment= document.getElementById("comment").value;

    console.log(firstname, lastname, adress, email, password, comment);
        

    if(!firstname || !lastname || !adress || !email || !password || !comment)
    {
        alert("Alert: One of the inputs is empty");
        return false;
    }

  }
