function getCtx(selector) {
  // 获取当前页面
  const pages = getCurrentPages()
  const ctx = pages[pages.length - 1]
  const componentCtx = ctx.selectComponent(selector)
  // console.log(ctx)
  // console.log(selector)
  // console.log(pages)
  // console.log(componentCtx)
  if (!componentCtx) {
    console.error('无法找到对应的组件，请按文档说明使用组件')
    return null
  }
  return componentCtx;
}

function Message(options) {
  console.log(options)
  const {
    selector = "#msg"
  } = options
  const ctx = getCtx(selector)
  ctx.handleShow(options)
}

module.exports = {
  $Message: Message
};