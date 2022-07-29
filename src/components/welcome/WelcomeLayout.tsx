import { FunctionalComponent } from 'vue'
import { RouterLink } from 'vue-router'
import style from './WelcomeLayout.module.scss'

// 函数式组件
const X: FunctionalComponent = (props, {slots}) => (
  <div class={style.wrapper}>
    <div class={style.card}>
      {slots.card_logo?.()}
      {slots.desc?.()}
    </div>
    <div class={style.actions}>
      <RouterLink class={style.skip} to='/start'>
        跳过
      </RouterLink>
      {slots.buttons?.()}
    </div>
  </div>
)

export default X
