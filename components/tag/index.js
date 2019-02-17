// components/tag/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['b-class'],
  properties: {
    // 标签名称
    name: {
      type: String,
      value: ''
    },
    // 是否可点击
    isChecked: {
      type: Boolean,
      value: false
    },
    //是否选中
    checked: {
      type: Boolean,
      value: true
    },
    // 颜色
    color: {
      type: String,
      value: 'default'
    },
    // 样式类型 border, dot
    type: {
      type: String,
      value: 'dot'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event) {
      const data = this.data
      if (data.isChecked) {
        const checked = data.checked ? false : true;
        this.triggerEvent('change', {
          name: data.name || '',
          checked
        })
      }
    }
  }
})