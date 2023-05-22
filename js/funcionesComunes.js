function agregarFila(idTabla, nombresInputs, nombreFormulario, tiposInputs) {
  var table = document.getElementById(idTabla);
  var row = table.insertRow(-1);
  var rowCount = table.rows.length - 1;
  row.setAttribute('id', 'fila-' + rowCount);
  for (var i = 0; i < nombresInputs.length; i++) {
    var cell = row.insertCell(i);
    if (tiposInputs[i] === 'number') {
      cell.innerHTML = '<input type="' + tiposInputs[i] + '" step=".01" class="form-control ' + nombreFormulario[i] + '" name="' + nombresInputs[i] + '[]">';
    } else {
      cell.innerHTML = '<input type="' + tiposInputs[i] + '" class="form-control ' + nombreFormulario[i] + '" name="' + nombresInputs[i] + '[]">';
    }
  }
}

function eliminarFila(idTabla) {
  var table = document.getElementById(idTabla);
  var rowCount = table.rows.length - 1;
  if (rowCount > 0) {
  var filaAEliminar = document.getElementById('fila-' + rowCount);
  filaAEliminar.remove();
  }
}