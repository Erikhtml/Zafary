

const input1 = window.document.querySelector('#email');
const input2 = window.document.querySelector('#passwd');
const boton = window.document.querySelector('#LOGIN');
boton.addEventListener('click', comparaIngreso);

function comparaIngreso() {
    const input1 = window.document.querySelector('#email');
    const textoInput1=input1.value;
    console.log(textoInput1);
    const input2 = window.document.querySelector('#passwd');
    const textoInput2=input2.value;
    console.log(textoInput2);

    if (textoInput1 === 'ejemplo@gmail.com' && textoInput2 === '123456') {
        console.log('Iniciando sesión…')
        input1.value='';
        input2.value='';
        input1.focus();
        input1.focus();

    }   
        else { 
        console.log('Email y/o contraseña incorrectos')
        input1.focus();
    }
}
