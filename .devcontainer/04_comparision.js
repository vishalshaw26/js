                                            //COMAPRISON = True or False



console.log(null > 0); /* Comparison (>) converts null to a number before comparing.
                             null is converted to 0 and--- 0 > 0 is false */


 console.log(null == 0); // false 
 /* The equality check (==) does not convert null to a number
   null is only equal to undefined in loose equality (==), not to numbers
   So, null == 0 is false*/


   console.log(null >= 0); // true The >= comparison also converts null to a number (0)
                          // It becomes 0 >= 0, which is true.