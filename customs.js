// CELSIUS TO FAHRENHEIT CODE

const convertFahrenheit = () =>{
    var celsius = parseFloat(document.querySelector("#celsius").value);

    var fahreheitResult=(1.8*celsius)+32;
    var a = fahreheitResult.toFixed(2);
    document.querySelector("#celsius").value = celsius;
    document.querySelector("#fahrenheit").value = a;
}





// FAHRENHEIT TO CELCIUS CODE 

const convertCelsius = () =>{
    var fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);

    var CelsiusResult =(fahrenheit-32)/(1.8);
    var b = CelsiusResult.toFixed(2);
    document.querySelector("#celsius").value = b;
    document.querySelector("#fahrenheit").value = fahrenheit;
}


const reset = () =>{
    document.querySelector("#celsius").value = " ";
    document.querySelector("#fahrenheit").value =" ";
}