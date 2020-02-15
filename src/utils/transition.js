// 运动框架
// 在一定时间内实现某一元素的某一属性的变化
/**
 * el 元素对象
 * pro 变化的属性
 * time 时间长度  单位mm
 * distance 变化幅度
 * */ 
export default function (el, pro,time, distance) {
  // 每毫秒移动距离
  let interval = distance / time
  let timer = setInterval(() => {
    debugger
    // 反复获取初始值
    let currentValue = el[pro] ? el[pro] : el.style[pro]
    if (currentValue >= distance) {
      clearInterval(timer)
      return
    }
    currentValue += interval * 1000
    el[pro]
    ? el[pro] = currentValue
    : el.style[pro] = currentValue
  }, 1000);
}