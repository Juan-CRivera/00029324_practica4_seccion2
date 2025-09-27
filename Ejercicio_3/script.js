function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  let altura = 0;
  let dias = 0;
  while (altura < alturaDeseada) {
    altura += velocidadCrecimiento;
    dias++;
    if (altura >= alturaDeseada) { return dias }
    altura -= velocidadDecrecimiento;
  }
  return dias;
}

function mostrarResultado() {

    const velocidadCrecimiento = parseFloat(document.getElementById('velocidadCrecimiento').value);
    const velocidadDecrecimiento = parseFloat(document.getElementById('velocidadDecrecimiento').value);
    const alturaDeseada = parseFloat(document.getElementById('alturaDeseada').value);

    if (isNaN(velocidadCrecimiento) || isNaN(velocidadDecrecimiento) || isNaN(alturaDeseada)) {
        document.getElementById('resultado').textContent = "Por favor, ingresa solo números.";
        return;
    }
    
    const diasCrecimiento = calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada);

    document.getElementById('resultado').textContent = diasCrecimiento;
}