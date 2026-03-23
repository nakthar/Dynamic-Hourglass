let outerRow = 28;
let innerRow = outerRow-4;
let time = 0;

const innerChar = document.querySelector('#txtInner');
const outerChar = document.querySelector('#txtBorder');

function hourglassConsole(innerChar, outerChar, time) {
    //The size of the outer row and inner row get divided by half
    //This is to make help with setting up the upper half and lower half of the hour glass separately
    let output = "";

    let outerRowHalf = outerRow / 2;
    let innerRowHalf = innerRow / 2;
    
    //This checks if the passed value for time is more than 12
    if (time > 12) {
        //If yes, then time is initialized back to 0
        //This is so that when "next" called and the lower half of the glass is filled, all the sands get reset 
        //back to the upper half just like how when after 12oclock, the time gets reset to 1oclock rather than 13oclock
        time = 0;
    }
    //This checks if the passed in value for time is less than 0
    if (time < 0) {
        //If yes, then time is initialized to 0
        //This is so that when "prev" is called and the upper half of the glass is filled, then sands get sent
        //back to the lower half of the hour glass, similar to how if you keep turning the clock counter clock-wise, 
        //then after 1, the arm of the clock goes to 12
        time = 12;
    }
    
    //Prints an empty space
    let top = "";
    //Prints an empty space
    top += '\xa0';
    output += top + "\n";
    //This prints the top row of the outside of the hour glass
    for (let k = 0; k <= outerRowHalf; k++) {
        //Prints out the passed in user input on the outer material of the hour glass along with a space in
        //each loop
        top += outerChar + '\xa0';
    }
    output += top + "\n";
    //Create one line of empty space
    output += "\n";
    //After the first row, this for loops creates the following number of rows for the upper half of the hour glass
    //including the inside sand
    //This first for loops decides the number of columns
    for (let i = 0; i < outerRowHalf-1; i++) {
        let row = "";
        //Inside the for loop, this for loop creates a number of spaces that increments by each row
        //Is what helps create the shape of the hour glass
        for (let j = 0; j < i+2; j++) {
            //Prints out empty spaces
            row += '\xa0';
        }
        //Prints out the outer material on the left side of the hour glass following the spaces
        row += outerChar + '\xa0';
        //This for loop is what creates the sand inside the hour glass using user inputted inner material
        for (let n = i; n < innerRowHalf; n++) {
            //This if statement checks if time is more than i (checks if time has been incremented or decremented)
            if (time > i) {
                //If yes, then the inside of the hour glass prints empty row of spaces until i is greater than time
                row += '\xa0' + '\xa0';
            }
            //If not, then rows of sands are printed inside of the hour glass
            else {
                row += innerChar + '\xa0';
            }
        }
        //Prints out the outer material on the right side of the hour glass following the sand
        row += outerChar;
        //Again, creates an empty line of space
        output += row + "\n";
        output += "\n";
    }
    //The upper half of the hour glass get created and now the lower half of the hour glass gets created using
    //this for loop
    //Again, the first for loop decides the number of columns
    for (let i = outerRowHalf - 2; i >= 0; i--) {
        let row2 = "";
        //Similarly, this for loop creates empty spaces that decrement with each row
        for (let j = 0; j < i+2; j++) {
            //Prints out empty spaces
            row2 += '\xa0';
        }
        //Likewise, this also prints out the outer material on the left side of the hour glass 
        row2 += outerChar + '\xa0';
        //And this is where the sand of the lower half of the hour glass gets printed using inner material
        for (let n = i; n < innerRowHalf; n++) {
            //But before it does, it checks to see if the time is more than i
            if (time > i) {
                //If yes, then this time, the equal number of row is printed that has been emptied from the
                //upper half until i becomes greater than time
                row2 += innerChar + '\xa0';
            }
            //Otherwise, it just prints empty spaces 
            else {
                row2 += '\xa0' + '\xa0';
            }
        }
        //Likewise, prints out the outer material on the left side of the hour glass 
        row2 += outerChar;
        //Creates an empty line
        output += row2 + "\n";
        output += "\n";
    }
    //As the for loop until now does not create the last row for the hour glass, a separate for loop 
    //has to be used to create it
    //This for loop creates a space so that the last row of the hour glass gets aligned with the rest
    let bottom = "";
    for (let j = 0; j < 1; j++) {
        //Creates an empty space
        bottom += '\xa0';
    }
    //And then this for loop creates the last row of outer material
    for (let k = 0; k <= outerRowHalf; k++) {
        //Print out the outer material with a space
        bottom += outerChar + '\xa0';
    }
    output += bottom + "\n";

    return output;
}

function hourglassWeb(innerChar, outerChar, time) {
    //The size of the outer row and inner row get divided by half
    //This is to make help with setting up the upper half and lower half of the hour glass separately
    let output = "";

    let outerRowHalf = outerRow / 2;
    let innerRowHalf = innerRow / 2;
    
    //This checks if the passed value for time is more than 12
    if (time > 12) {
        //If yes, then time is initialized back to 0
        //This is so that when "next" called and the lower half of the glass is filled, all the sands get reset 
        //back to the upper half just like how when after 12oclock, the time gets reset to 1oclock rather than 13oclock
        time = 0;
    }
    //This checks if the passed in value for time is less than 0
    if (time < 0) {
        //If yes, then time is initialized to 0
        //This is so that when "prev" is called and the upper half of the glass is filled, then sands get sent
        //back to the lower half of the hour glass, similar to how if you keep turning the clock counter clock-wise, 
        //then after 1, the arm of the clock goes to 12
        time = 12;
    }
    
    //Prints an empty space
    let top = "";
    //Prints an empty space
    top += '\xa0';
    output += top + "<br>";

    //This prints the top row of the outside of the hour glass
    for (let k = 0; k <= outerRowHalf; k++) {
        //Prints out the passed in user input on the outer material of the hour glass along with a space in
        //each loop
        top += outerChar + '\xa0';
    }
    output += top + "<br>";
    //Create one line of empty space
    output += "<br>";
    //After the first row, this for loops creates the following number of rows for the upper half of the hour glass
    //including the inside sand
    //This first for loops decides the number of columns
    for (let i = 0; i < outerRowHalf-1; i++) {
        let row = "";
        //Inside the for loop, this for loop creates a number of spaces that increments by each row
        //Is what helps create the shape of the hour glass
        for (let j = 0; j < i+2; j++) {
            //Prints out empty spaces
            row += '\xa0';
        }
        //Prints out the outer material on the left side of the hour glass following the spaces
        row += outerChar + '\xa0';
        //This for loop is what creates the sand inside the hour glass using user inputted inner material
        for (let n = i; n < innerRowHalf; n++) {
            //This if statement checks if time is more than i (checks if time has been incremented or decremented)
            if (time > i) {
                //If yes, then the inside of the hour glass prints empty row of spaces until i is greater than time
                row += '\xa0' + '\xa0';
            }
            //If not, then rows of sands are printed inside of the hour glass
            else {
                row += innerChar + '\xa0';
            }
        }
        //Prints out the outer material on the right side of the hour glass following the sand
        row += outerChar;
        //Again, creates an empty line of space
        output += row + "<br>";
        output += "<br>";
    }
    //The upper half of the hour glass get created and now the lower half of the hour glass gets created using
    //this for loop
    //Again, the first for loop decides the number of columns
    for (let i = outerRowHalf - 2; i >= 0; i--) {
        let row2 = "";
        //Similarly, this for loop creates empty spaces that decrement with each row
        for (let j = 0; j < i+2; j++) {
            //Prints out empty spaces
            row2 += '\xa0';
        }
        //Likewise, this also prints out the outer material on the left side of the hour glass 
        row2 += outerChar + '\xa0';
        //And this is where the sand of the lower half of the hour glass gets printed using inner material
        for (let n = i; n < innerRowHalf; n++) {
            //But before it does, it checks to see if the time is more than i
            if (time > i) {
                //If yes, then this time, the equal number of row is printed that has been emptied from the
                //upper half until i becomes greater than time
                row2 += innerChar + '\xa0';
            }
            //Otherwise, it just prints empty spaces 
            else {
                row2 += '\xa0' + '\xa0';
            }
        }
        //Likewise, prints out the outer material on the left side of the hour glass 
        row2 += outerChar;
        //Creates an empty line
        output += row2 + "<br>";
        output += "<br>";
    }
    //As the for loop until now does not create the last row for the hour glass, a separate for loop 
    //has to be used to create it
    //This for loop creates a space so that the last row of the hour glass gets aligned with the rest
    let bottom = "";
    for (let j = 0; j < 1; j++) {
        //Creates an empty space
        bottom += '\xa0';
    }
    //And then this for loop creates the last row of outer material
    for (let k = 0; k <= outerRowHalf; k++) {
        //Print out the outer material with a space
        bottom += outerChar + '\xa0';
    }
    output += bottom + "<br>";

    return output;
}

 console.log(hourglassConsole("#",  "*", 5));

function display() {
    hourglassDisplay(innerChar.value, outerChar.value, time);
}

function next() {
    time++;
    hourglassDisplay(innerChar.value, outerChar.value, time);
}
function previous() {
    time--;
    hourglassDisplay(innerChar.value, outerChar.value, time);
}
function nexus(){
    time = 0;
    hourglassDisplay(innerChar.value, outerChar.value, time);
}

function hourglassDisplay(innerChar, outerChar, time) {
    const h = document.querySelector("#hourglass");
    h.innerHTML = "";

    const hourglass = document.createElement("p");
    hourglass.innerHTML = hourglassWeb(innerChar, outerChar, time);
    h.appendChild(hourglass);
}
