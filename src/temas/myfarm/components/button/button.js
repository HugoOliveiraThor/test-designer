/**
 * @author Renatto Machado <renatto.machado@siagri.com.br>
 */

/**
 * Botões são geralmente usados ​​para ações de interface.
 *
 *
 *
 * Para implementação do botão no component em Vue veja a documentação em : https://element.eleme.io/#/en-US/component/button.
 *
 */

export default {
  name: "cnx-button",
  element: "<el-button/>",
  status: "prototype",
  release: "0.0.1",
  props: {
    /**
     * O elemento referente ao HTML.
     * `button`
     */
    type: {
      type: String,
      default: "default",
      validator: value => {
        return value.match(/(primary|default|success|warning|danger|info|text)/)
      },
    },
    /**
     * O tamanho do botão . O valor default é medium
     * `medium, small, mini`
     */
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return value.match(/(medium|small|mini)/)
      },
    },
    /**
     * Determina se é o botão é redondo
     * `true, false`
     */
    round: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Determina se é o botão é simples
     * `true, false`
     */
    plain: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Determina se o botão é um circulo
     * `true, false`
     */
    circle: {
      type: Boolean,
      default: false,
    },
    /**
     * Habilita o focus no campo
     * `true, false`
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
    /**
     * Habilita se apresenta loading ou não.
     * `true, false`
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * Seta o tipo do botão.
     */
    submit: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(null|submit)/)
      },
    },
  },
}
