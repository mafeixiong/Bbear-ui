const tip = (msg, getValue) => {
  console.log(msg)
  console.log('接收到的值为：' + getValue)
}
// components/cell/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['b-class'],
  options: {
    multipleSlots: true
  },
  relations: {
    '../cell-group/index': {
      type: 'parent'
    }
  },
  properties: {
    // 左侧标题
    title: {
      type: String
    },
    // 标题下方的描述信息
    label: {
      type: String
    },
    // 右侧内容
    value: {
      type: String
    },
    // 是否展示右侧箭头并开启尝试以 url 跳转
    isLink: {
      type: null,
      value: ''
    },
    onlyTapFooter: {
      type: Boolean,
      value: false
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    url: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLastCell: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event) {
      if (!this.data.onlyTapFooter) {
        this.navigateTo()
      }
    },
    navigateTo(event) {
      const {
        url
      } = this.data
      const type = typeof this.data.isLink
      if (!this.data.isLink || !url || url === 'true' || url === 'false') return
      if (type !== 'boolean' && type !== 'string') {
        tip(`isLink 属性值必须是一个字符串或布尔值${this.data.isLink}`)
      }
      if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) === -1) {
        tip('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', this.data.linkType)
        return
      }
      wx[this.data.linkType].call(wx, {
        url
      })
    },
    updateIsLastCell(isLastCell) {
      this.setData({
        isLastCell
      })
    }
  }
})