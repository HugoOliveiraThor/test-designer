export const moedaParaNumero = valor => {
  console.log(valor)
  if (typeof valor === "number") return valor

  const occ = occurrences(valor, ".")

  if (occ >= 1) {
    let str = valor.replace("R$", "")
    const numeroDeVirgulas = occurrences(valor, ",")

    if (occ >= 1 && numeroDeVirgulas >= 1) str = str.split(".").join("")

    str = str.replace(",", ".")

    return parseFloat(str)
  } else {
    let str = valor.replace("R$", "")

    if (str.indexOf(",") > -1) str = str.replace(",", ".")

    return parseFloat(str)
  }
}

function occurrences(string, subString, allowOverlapping) {
  string += ""
  subString += ""
  if (subString.length <= 0) return string.length + 1

  var n = 0
  var pos = 0
  var step = allowOverlapping ? 1 : subString.length

  while (true) {
    pos = string.indexOf(subString, pos)
    if (pos >= 0) {
      ++n
      pos += step
    } else break
  }
  return n
}

export const numeroParaMoeda = (valor, decimal = 2) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: decimal,
  })
  return typeof valor === "string"
    ? formatter.format(moedaParaNumero(valor)).replace("R$", "")
    : formatter.format(valor).replace("R$", "")
}
