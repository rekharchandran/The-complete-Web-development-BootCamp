
var numberOfBottles = 99;

while(numberOfBottles>=0){
    var bottleworld = "bottle";

    if (numberOfBottles===1){

        bottleworld="bottles";
    }

    console.log(numberOfBottles + " " + bottleworld + "of beer on the wall");
    console.log(numberOfBottles + " "+ bottleworld + " of beer,");
    console.log("Take on down, pass it around,");

     numberOfBottles--;

     console.log(numberOfBottles + " " + bottleworld + "of beer on the wall.");
}

