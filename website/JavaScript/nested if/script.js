let english=100,tamil=100,maths=100
let total
let avg
total=english+tamil+maths
avg=total/3
console.log("Total : ",total)
console.log("Average : ",avg.toFixed(2))
if(english>=35 && tamil>=35 && maths>=35)
    {
        console.log("Result : Pass")
    }
    if(avg>=91 && avg<=100)
            {
                console.log("Grade :  A")
            }
    else if(avg>=81 && avg<=90)
            {
                console.log("Grade :  B")
            }
     else if(avg>=71 && avg<=80)
            {
                console.log("Grade :  C")
            }
    else if(avg>=61 && avg<=70)
            {
                console.log("Grade :  D")
            }
else{
    console.log("Result : Fail")
    console.log("Grade : No Grade")
}