var a = '';
var b = '';
var num = [];
var ans;

// All the numbers and operators input will be stored in an array "num" using function "sendNum()"
function sendNum(digit){

	num.push(digit);

	if(num.length != 1){
		a = '';
		document.getElementById('screen').innerHTML = a;		// clearing the screen.
	}


	for(i=0; i<num.length ; i++){

		a = a + num[i];				// concatenate the elements of the array "num" into a single string, which will be displayed on the screen
		
	}

document.getElementById('screen').innerHTML = a;	// displaying the concatenated string

	
}

// when the user presses "=", function "equalTo()" is called 
function equalTo(){
	document.getElementById('screen').innerHTML = '';

	for(i=0; i<num.length ; i++){

		b += num[i];						// concatenating the array "num" into a single string
	}

	ans = eval(b);	

	document.getElementById('screen').innerHTML = ans;		// result display

	while(num.length > 0){
    	num.pop();				// emptying the array "num"
	}

	num.push(ans.toString());

	
}


// When user presses "AC", function "clearScr()" is called
function clearScr(){
	document.getElementById('screen').innerHTML = '';
	
	while(num.length > 0){
    	num.pop();				// emptying the array "num"
	}

	a ='';	
	b ='';
}

    var valora = parseInt(prompt("Digite o valor de A: "));
    var valorb = parseInt(prompt("Digite o valor de B: "));
    var valorc = parseInt(prompt("Digite o valor de C: "));

//  Abaixo calculamos a fórmula propriamente dita.

    var quadradodeb = valorb * valorb;

    var delta = quadradodeb - 4 * (valora * valorc);

//  Abaixo verificamos se o Delta é = 0 ou <0 e se é possível continuar a calcular.

    if(delta < 0){
        document.write("Não é possível calcular pois o Delta é menor que zero.");
    }

    if(delta == 0){
        document.write("O Delta é zero, portando os valores de X1 e X2 serão iguais.<br>");
    }


    var valordebneg = valordeb * (-1);  /* INVERTE O SINAL DO B */

    var raizdedelta = Math.sqrt(delta); /* CALCULA A RAIZ DO DELTA, NO CASO, FEITO PELA FUNÇÃO Math.sqrt(variável) */

    var divisor = 2 * valordea; /* CALCULA O DIVISOR, NO CASO QUE DIVIDIRÁ B + RAIZ DE DELTA */

    var resultadox1 = (valordebneg + raizdedelta) / divisor;    /* CALCULA O X1 */

    var resultadox2 = (valordebneg - raizdedelta) / divisor;    /* CALCULA O X2 */


    document.write("∆ = B² - 4 X A X C<br>");
    document.write("∆ = " + quadradodeb + " - 4 X " + valora + " X " + valorb);
    document.write("<br>∆ = " + delta);

    document.write("<br>X = -B +ou- √∆ <br>__________________<br>      2 X A");
    document.write("<br> X = " + valordebneg + " +ou- " + raizdedelta + "<br>____________________<br>      2 X " + valora);
    document.write("<br><br>X1 = " + quadradodeb + " + " + raizdedelta + " / " + divisor);
    document.write("<br>X1 = " +resultadox1);

    document.write("<br><br>X2 = " + quadradodeb + " - " + raizdedelta + " / " + divisor);
    document.write("<br>X2 = " +resultadox2);