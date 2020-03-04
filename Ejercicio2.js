/*2.- Dado un array de enteros y un valor, encontrar el número de tripletas (subarrays de longitud 3) cuya suma es menor al valor dado.

Por ejemplo:

Para [-2, 0, 1, 3] y 2 => La solución es 2. (-2, 0, 1) y (-2, 0, 3)
Para [5, 3, 4, 1, 7] y 12 => La solución es 4. (1, 3, 4), (1, 3, 5), (1, 3, 7) y (1, 4, 5)
Para [5, 1, 3, 4, 7, 2] y 10 => La solución es 6. (1, 3, 4), (1, 3, 5), (2, 3, 4), (1, 2, 4), (1, 2, 3) y (1, 2, 5)*/


var a=[-2,0,1,3];
var b=[5, 3, 4, 1, 7];
var c=[5, 1, 3, 4, 7, 2];
var cifra=2;
var cifra2=12;
var cifra3=10;

 
function calculoNumTripletas(t,j)
{
    let array= t;
    let N = array.length;
    let sum = j;
    let rdo = 0;
    for (var i = 0; i < N-2; i++)
    {
       for (var j = i+1; j < N-1; j++)
       {
           for (var k = j+1; k < N; k++)
           {
               if(array[i]+array[j]+array[k] < sum)
                   {
                      rdo++;
                   }
           }
       }
    }
    console.log("para ["+t+ "]"+" El Numero de tripletas es "+rdo);
}

calculoNumTripletas(a,cifra);
calculoNumTripletas(b,cifra2);
calculoNumTripletas(c,cifra3);
