import { RouterLink } from 'vue-router'
import card_logo from '../../assets/icons/welcome_2.svg'
import WelcomeLayout from './WelcomeLayout'

const slots = {
  card_logo: () => <img src={card_logo} alt='card_logo' />,
  desc: () => (
    <h2> 每日提醒 <br /> 不会遗漏一笔账单 </h2>
  ),
  buttons: () => [
    <RouterLink to='/welcome/3'>下一页</RouterLink>,
    <RouterLink to='/start'>跳过</RouterLink>,
  ],
}

// 函数式组件-无状态
const Second = {
  render: () => <WelcomeLayout v-slots={slots} />,
}

export default Second
