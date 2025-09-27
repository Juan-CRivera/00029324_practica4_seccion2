function calendario(Dia_actual){
    switch(Dia_actual){
        case "Lunes":
            return "Debo atender un cliente especifico."
            break;
        case "Martes":
            return "Visitar agencia fuera de la ciudad."
            break;
        case "Miercoles":
            return "Debo llevar a mi hija al ballet."
            break;
        case "Jueves":
            return "Debo priorizar entregas de desarrollo."
            break;
        case "Viernes":
            return "Debo atender problemas de manera remota. "
            break;
        case "Sabado":
            return "Debo hacer lo que mi esposa quiera. "
            break;
        default:
            return "Dia no valido, ingresa un dia real y existente";
    }
}


function MostrarTarea() {
    let D_ingresado = document.getElementById('DIA').value;
    let D_normalizado = D_ingresado.charAt(0).toUpperCase() + D_ingresado.slice(1).toLowerCase();
    let TareaDia = calendario(D_normalizado);
    document.getElementById('resultado').textContent = TareaDia;
}