export function getTemplateSelected() {
  // Muito cuidado o parametro da rota se ele for modificado onde faz o split vai quebrar todo o SDK
  if(window.location.href.indexOf('Temas') == -1) return alert('Voce mudou o nome da rota na url(Padrão = Temas)')
  const path = window.location.href
  const findDefaultPath = path.split("Temas")[1] // I can find the element before Theme /MyFarm example
  const splitTerms = findDefaultPath.split("/")
  return splitTerms[1]
}
