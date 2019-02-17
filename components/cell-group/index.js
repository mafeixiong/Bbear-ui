// components/cell-group/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['b-class'],
  relations: {
    '../cell/index': {
      type: 'child',
      linked() {
        this._updateCell()
      },
      linkChanged() {
        this._updateCell()
      },
      unlinked() {
        this._updateCell()
      }
    }
  },
  properties: {

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
    _updateCell() {
      let cells = this.getRelationNodes('../cell/index');
      const len = cells.length
      if (len > 0) {
        let lastIndex = len - 1
        cells.forEach((cell, index) => {
          cell.updateIsLastCell(index == lastIndex)
        })
      }
    }
  }
})