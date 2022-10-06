const inputTexto = document.querySelector(".input-texto");  // O DOM (Document) liga o Java Script com o HTML. 
const mensagem = document.querySelector(".espaco-dois");
const button = document.querySelector(".encriptar");
mensagem.disabled = true;



function toggleButton() {
	let inputTextoValue = inputTexto.value;
	if(inputTextoValue === "") {
		document.querySelector(".encriptar").disabled = true;
	} else {
		document.querySelector(".encriptar").disabled = false;
		}
}


function checkTextArea() {
	let mensagemCripValue = mensagem.value;
	if(mensagemCripValue) {
		checkSuccess(); 
	}
}

function checkSuccess(input) {
	let checkList = document.querySelector(".espaco-dois");

	checkList.className = "espaco-dois success"; 
	
}

function checkTextDescrip() {
	let mensagemCripValue = mensagem.value;
	if(mensagemCripValue) {
		checkSuccessDescrip(); 
	}
}

function checkSuccessDescrip(input) {
	let checkList = document.querySelector(".espaco-dois");

	checkList.className = "espaco-dois descriptografia"; 
	
}

function btnEncriptar() {    // btnencriptar está ligado ao html através do botão onclick.
	const textoEncriptado = encriptar(inputTexto.value);
	mensagem.value = textoEncriptado;
	if(textoEncriptado) {
		document.querySelector(".copiar").disabled = false;
		checkTextArea();
	} else {
		document.querySelector(".copiar").disabled = true;
		}
	if(textoEncriptado) {
		document.querySelector(".descriptografar").disabled = false;
	} else {
		document.querySelector(".descriptografar").disabled = true;
		}
}

function copiar() {
	const copiarTexto = document.querySelector(".espaco-dois");
	copiarTexto.select();
	navigator.clipboard.writeText(copiarTexto.value);
	if(copiarTexto) {
		alert("Texto copiado");
	}
			
}

//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function encriptar(stringEncriptada) {
	let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; // matriz multidimensional. É um Array de Array.
	stringEncriptada = stringEncriptada.toLowerCase();  // toLowerCase transforma em letras minúsculas.

	for(let i = 0; i < matrizCodigo.length; i++) {
		if(stringEncriptada.includes(matrizCodigo[i][0])) {    // includes() verifica se o valor existe dentro da Array. 
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);   // replace substitui os valores. All conseguimos substituir tudo.
		}
	}
	return stringEncriptada;
}

function btnDesencriptar() {    // btnencriptar está ligado ao html através do botão onclick.
	const textoDesencriptado = Desencriptar(inputTexto.value);
	mensagem.value = textoDesencriptado;
	checkTextDescrip();
}

function Desencriptar(stringDesencriptada) {
	let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; // matriz multidimensional. É um Array de Array.
	stringDesencriptada = stringDesencriptada.toLowerCase();  // toLowerCase transforma em letras minúsculas.

	for(let i = 0; i < matrizCodigo.length; i++) {
		if(stringDesencriptada.includes(matrizCodigo[i][1])) {    // includes() verifica se o valor existe dentro da Array. 
			stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);   // replace substitui os valores. All conseguimos substituir tudo.
		}
	}
	return stringDesencriptada;
}