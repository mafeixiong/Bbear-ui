// components/button/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  externalClasses: ['b-class'],
  properties: {
    type: {
      type: String,
      value: '',
    },
    inline: {
      type: Boolean,
      value: false
    },
    size: {
      type: String,
      value: ''
    },
    long: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    openType: String,
    appParameter: String,
    radius: String
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
    onTap: function(event) {
      if (this.properties.disabled) return false
      this.triggerEvent('click')
    },
    bindgetuserinfo: function({
      detail
    }) {
      this.triggerEvent('getuserinfo', detail, {})
    },
    bindgetuserinfo({
      detail
    }) {
      this.triggerEvent('getuserinfo', detail);
    },
    bindcontact({
      detail
    }) {
      this.triggerEvent('contact', detail);
    },
    bindgetphonenumber({
      detail
    }) {
      this.triggerEvent('getphonenumber', detail);
    },
    binderror({
      detail
    }) {
      this.triggerEvent('error', detail);
    }
  }
})