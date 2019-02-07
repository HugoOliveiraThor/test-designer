/**
 * @author Hugo Oliveira <hugo.oliveira@siagri.com.br>
 */

/**
 * Notifications apresentam uma message nas laterais das página.
 *
 * @see Veja [ElementUI Notification](https://element.eleme.io/#/en-US/component/notification)
 */

export default {
  name: "Notification",
  element: "<el-button/>",
  status: "prototype",
  release: "0.0.1",
  methods: {
    open3() {
      this.$notify({
        title: "Success",
        message: "This is a success message",
        type: "success",
      })
    },

    open4() {
      this.$notify({
        title: "Warning",
        message: "This is a warning message",
        type: "warning",
      })
    },

    open5() {
      this.$notify.info({
        title: "Info",
        message: "This is an info message",
      })
    },

    open6() {
      this.$notify.error({
        title: "Error",
        message: "This is an error message",
      })
    },
  },
  props: {
    /**
     * @model
     *
     */
    value: String,
    /**
     * O elemento referente ao HTML.
     * `checkbox`
     */
  },
}
