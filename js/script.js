// Ask the user what their name is

// Ask the user what their favorite color is.


//create a function that if the user enters one of
// of the favorite colors, alert them with a positve
//message. else just say that it is a great color.

function DisplayMsg () {

    const name = prompt("What is your name?");
    console.log(name);
// Ask the user what their favorite color is.
    let favColor = prompt("What is your favorite color?");
    console.log(favColor);

    if ((favColor != "blue") && (favColor !="red") && (favColor !="purple")) {
        
        let message = `${favColor} is not my favorite color, we are not compatible ${name}`;
        alert(message);
        
    }
    else
     {
        let message = `${favColor} is a great color ${name}`;
        alert(message);
    }
}







