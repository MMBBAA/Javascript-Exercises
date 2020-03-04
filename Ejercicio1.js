/* Dado un array de enteros, devolver la longitud del subarray más largo posible de elementos contiguos.

Por ejemplo:

Para [7, 9, 8] => La solución es 3
Para [15, 21, 20, 7] => La solución es 2
Para [11, 16, 18, 17, 20, 22, 24, 23, 21, 25, 7] => La solución es 6*/

var a=[7,9,8];
var b=[15,21,20,7];
var c=[11,16,18,17,20,22,24,23,21,25,7];

//var c=[20,22,24,23,21,25];
function ordenaArray(h){

let a1;
a1=h.sort(function(a, b) {
  return b - a;
});
console.log("array ordenado: "+a1);
mideSubarray(a1);

}

function mideSubarray(t){
	var dimension=1;
	//var dimension=0;
	for(var i=0;i<=t.length;i++){
		if(t[i]-t[i+1]<=1){
			dimension++;
			console.log(dimension);
		}
		else{
			break;
		}
	
	}
	console.log("dimension:"+dimension);
	}




function separaSubarray(y){
	var uno=[];
	var dos=[];
	for(var i=0;i<=y.length;i++){

	}
}

ordenaArray(a);
ordenaArray(b);
ordenaArray(c);