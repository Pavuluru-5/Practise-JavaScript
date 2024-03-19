//to find first 100 prime numbers
let count = 0;
let num = 0;
let i = 2; 
while (num <= 100) 
{
    count = 0; 
    for (let j = 1; j <= i; j++) 
    {
        if (i % j === 0) 
        {
            count++;
        }
    }
    if (count === 2) 
    {
        console.log(i);
        num++;
    }
    i++; 
}
