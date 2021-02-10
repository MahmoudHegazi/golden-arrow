# golden-arrow


# new update
```
var damge = 0;
const basic_attack = 30;
const poiton1 = 80;
const poiton2 = 120;
function sum(a,...theArgs) {
   

   if (theArgs.length > 0) {
     let cdamge = a; 
     theArgs.forEach( arg=> { 
        if (arg == 'poiton1') {
           cdamge += a;
        } else if (arg == 'poiton2'){
           cdamge += a;
        }
        console.log('your damge is: ' + (a + basic_attack + cdamge))
     })
   } else {
       console.log('your damge is' + (a + basic_attack) ); 
   }

}

sum(30, 'poiton1', 'poiton2')
```
