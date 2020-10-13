

function isLeap(year){
  
    if (year % 4===0) {

        if (year%100===0){

       if (year%400===0) {    

    return "It is a leapyear.";


} else {

    return  "It is  not a leapyear.";

}

} else {

            return "It is a leapyear.";
}

        } else{

            return"It is not a leapyear";
        }
    
    }


