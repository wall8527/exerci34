export let txtin = prompt("Ingresa una cadena de texto"),
    validatein   = parseInt(txtin);
  


    function txtLength() {
    if (txtin === ""){

      //console.log("No has ingresado cadena de texto");
      console.warn("No has ingresado cadena de texto");
      alert("No has ingresado cadena de texto");
      return txtin =  prompt("Por favor ingresa una cadena texto");

    }else if(validatein >= 0 || validatein <= 0){

    //console.log("Ingresa sólo cadena de texto");
    console.warn("Por favor recarga el navegador e ingresa sólo cadena de texto");
    alert("Por favor recarga el navegador e ingresa sólo cadena de texto");
  }
}
    txtLength();
