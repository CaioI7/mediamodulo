function calcularMediaNotas(ids) {
  let soma = 0;
  let qtd = 0;

  ids.forEach(id => {
    let valor = document.getElementById(id).value.replace(",", ".");
    if (valor !== "") {
      soma += parseFloat(valor);
      qtd++;
    }
  });

  return qtd > 0 ? soma / qtd : 0;
}

function calcularNota() {
  // Médias internas
  let mediaPBL = calcularMediaNotas(["pbl1", "pbl2", "pbl3", "pbl4"]);
  let mediaRot = calcularMediaNotas(["rot1", "rot2", "rot3", "rot4"]);
  let mediaGRAT = calcularMediaNotas(["grat1", "grat2", "grat3", "grat4"]);
  let mediaIRAT = calcularMediaNotas(["irat1", "irat2", "irat3", "irat4"]);

  // Notas simples
  let teorica = parseFloat(document.getElementById("teorica").value.replace(",", ".")) || 0;
  let lpi = parseFloat(document.getElementById("lpi").value.replace(",", ".")) || 0;
  let lmf = parseFloat(document.getElementById("lmf").value.replace(",", ".")) || 0;

  // Cálculo ponderado
  let notaFinal = (
    (mediaPBL * 0.10) +
    (mediaRot * 0.10) +
    (mediaGRAT * 0.10) +
    (mediaIRAT * 0.15) +
    (teorica * 0.34) +
    (lpi * 0.07) +
    (lmf * 0.14)
  );

  // Mostra resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `Nota Final: ${notaFinal.toFixed(2)} - `;

  if (notaFinal >= 7) {
    resultado.innerHTML += "Aprovado ✅";
    resultado.className = "aprovado";
  } else {
    resultado.innerHTML += "Reprovado ❌";
    resultado.className = "reprovado";
  }
}
