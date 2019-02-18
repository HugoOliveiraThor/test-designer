/**
 * @author 'Hugo Oliveira' <seunome.oliveira@siagri.com.br>
 */

/**
 *
 * Ex: Selects são geralmente usados ​​para selecionar opções sejam unitários ou em grupos.
 *
 * Local de onde retirou @see Veja [ElementUI Checkbox](https://element.eleme.io/#/en-US/component/checkbox)
 * Não se esqueca que o name é o nome do componente que será utilizada dentro do vue component
 *
 */
export default {
  name: "cnx-select",
  element: "<el-select/>",
  status: "prototype",
  release: "0.0.1",
  data() {
    return {}
  },
  props: {
    /**
     * @model
     *
     */
    value: String,
  },
}
