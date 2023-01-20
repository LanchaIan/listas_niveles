let personas = [];
let servicio = document.getElementById('servicio');
alert("hola");
alert(servicio.options[servicio.selectedIndex].innerText);
servicio.addEventListener("change", function(){
    alert("hola");
})

function funcion_reset() {
    if (confirm("¿Está seguro de que quiere reinicializar todos los" +
    " campos del formulario?")) {
    return true
    }
    else {
    return false
    }
    }
    
    function cambiar() {
        alert("buenas");
    }
    
    function conseguir_datos() {
        let persona = [];
        let apellidos = document.getElementById("apellidos").value;
        let nombre = document.getElementById("nombre").value;
        let sexo = conseguir_input_radio();
        let correo = document.getElementById("correo").value;
        persona.push(apellidos);
        persona.push(nombre);
        persona.push(sexo);
        persona.push(correo);
        let info = [];
        let mat_audiovi = document.getElementById("mat_audiovi");
        let textos_elec = document.getElementById("textos_elec");
        let libros = document.getElementById("libros");
        if (mat_audiovi.checked == true){  
            info.push("Material audiovisual");
          }  
          if (textos_elec.checked == true){  
            info.push("Textos electrónicos");   
          }  
          if (libros.checked == true){  
            info.push("Libros de texto"); 
          }  
        persona.push(info);
        let camino = document.getElementById("camino");
        let camino_texto = camino.options[camino.selectedIndex].innerText;
        persona.push(camino_texto);
        personas.push(persona);
        return persona;
    }
    
    function conseguir_datos_resumidos(){
        let persona = conseguir_datos();
        return persona[0] + " " + persona[1] + " Correo electrínico: " + persona[3];
    }

    function conseguir_datos_completos(){
        let num_persona = get_persona();
        let persona = personas[num_persona];
        return "Apellidos: " + persona[0] + "\nNombre: " + persona[1] + "\nsexo: " + persona[2] + "\nCorreo electrínico: " + persona[3] + "\nLlegó hasta aquí " + persona[5] + "\nDesea saber más información sobre: " + persona[4];
    }

    function calcular_personas(){
        let total = personas.length;
        return total;
    }

    function comprobar(){
        let completo = true;
        if (document.getElementById("apellidos").value == ""){
            completo = false;
            alert("Debes rellenar el apartado 'Apellidos'");
        }
        if (document.getElementById("nombre").value == ""){
            completo = false;
            alert("Debes rellenar el apartado 'Nombre'");
        }
        let sexo = conseguir_input_radio();
        if (sexo === undefined){
            completo = false;
            alert("Debes rellenar el apartado 'Sexo'");
        }
        if (document.getElementById("correo").value == ""){
            completo = false;
            alert("Debes rellenar el apartado 'Correo'");
        }
        
        return completo;
    }
    
    function añadir(){
        let comprobacion = comprobar();
        if (comprobacion === false){
            return;
        }
        let persona = document.createElement('option');
        let datos = conseguir_datos_resumidos();
        let num_personas = calcular_personas();
        persona.value = num_personas;
        persona.text = datos;
        let $select = document.querySelector("#personas");
        $select.appendChild(persona);
    }

    function get_persona(){
        let persona = document.getElementById("personas");
        let numero_persona = persona.value - 1;
        return numero_persona;
}
    function ver_datos(){
        if (document.getElementById("personas").value == ""){
            alert("Debes seleccionar una persona para ver sus datos");
        }
        let persona = conseguir_datos_completos();
        alert(persona);
    }

    function borrar_datos(){
        if (document.getElementById("personas").value == ""){
            alert("Debes seleccionar una persona para borrar sus datos");
        }
        let persona = document.getElementById("personas");
        let num_persona = get_persona();
        persona.remove(persona.selectedIndex);
        personas.splice(num_persona, num_persona + 1);
    }