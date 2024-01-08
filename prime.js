var num = 10;
var count = 0;
for(let i =2; i<10; i++)
{
    if(num%i == 0)
        count++;
}

if(count == 2)
    console.log("prime");
else   
    console.log("Not prime")