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
        let camino = document.getElementById("categoria").value;
        let sub_categoria = document.getElementById("sub_categoria");


 
        if (camino == "videos"){
            document.querySelectorAll(".juegos").forEach(a=>a.style.display = "none");
            document.querySelectorAll(".videos").forEach(a=>a.style.display = "initial");
            document.querySelectorAll(".discos").forEach(a=>a.style.display = "none");
            sub_categoria.value = 'humor';
            
        }
        if (camino == "discos"){
            document.querySelectorAll(".juegos").forEach(a=>a.style.display = "none");
            document.querySelectorAll(".videos").forEach(a=>a.style.display = "none");
            document.querySelectorAll(".discos").forEach(a=>a.style.display = "initial");
            sub_categoria.value = 'pop';
        }
        if (camino == "juegos"){
            document.querySelectorAll(".juegos").forEach(a=>a.style.display = "initial");
            document.querySelectorAll(".videos").forEach(a=>a.style.display = "none");
            document.querySelectorAll(".discos").forEach(a=>a.style.display = "none");
            sub_categoria.value = 'simulador';
        }
        let sub_categoria_ = document.getElementById("sub_categoria").value;
        document.getElementById("textarea").value = "Texto de " + camino + " -> " + sub_categoria_;
    }

    function cambiar_(){
        let camino = document.getElementById("categoria").value;
        let sub_categoria = document.getElementById("sub_categoria").value;
        document.getElementById("textarea").value = "Texto de " + camino + " -> " + sub_categoria;
    }