const default_data = {
  visible: false,
  content: '',
  duration: 2,
  type: 'default'
}

let timer = null

Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['b-class'],
  /**
   * 组件的初始数据
   */
  data: {
    ...default_data
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleShow(options) {
      console.log(options)
      const {
        type = 'default', duration = 2
      } = options
      this.setData({
        ...options,
        type,
        duration,
        visible: true,
      })
      const d = this.data.duration * 1000
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        this.handleHide()
        timer = null
      }, d)

    },

    handleHide() {
      this.setData({
        ...default_data
      })
    }
  }
})