/**
 * @author 'Seu nome' <seunome.oliveira@siagri.com.br>
 */

/**
 *
 * Steps guiam o usuário para concluir alguma tarefa ou seguir algum fluxo. Importante salientar que o número de etapas não pode ser inferior a 2
 * Local de onde retirou @see Veja [ElementUI Steps](https://element.eleme.io/#/en-US/component/steps)
 *
 */
export default {
  name: "cnx-steps",
  element: "<el-steps/>",
  status: "prototype",
  release: "0.0.1",
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
    },
  },
  props: {
    /**
     * @model
     *
     */
    value: String,
  },
}
