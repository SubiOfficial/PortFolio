var a=23
var b=4
console.log(a+b)
var a=23
var b=4
console.log(a*b)
// var globalscope

// 1.scope
if(true)
    {
        var msg = "SubiOfficial";
    }
    console.log(msg)

    if(true)
        {
            // var msg = "SubiOfficial";
            let msg = "SubiOfficial";
            console.log(msg)
        }
   if(true)
            {
                // var msg = "SubiOfficial";
                const msg = "SubiOfficial";
                // console.log(msg)
            }
            console.log(msg)


// 2.variable decleration
var a=23
console.log(a)
var a=4
console.log(a)
let a=23
console.log(a)
