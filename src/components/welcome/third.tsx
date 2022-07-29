import { FunctionalComponent } from 'vue'
import { RouterLink } from 'vue-router'
import card_logo from '../../assets/icons/welcome_3.svg'
import WelcomeLayout from './WelcomeLayout'

const slots = {
  card_logo: () => <img src={card_logo} alt='card_logo' />,
  desc: () => (
    <h2> 数据可视化 <br /> 收支一目了然 </h2>
  ),
  buttons: () => [
    <RouterLink to='/welcome/4'>下一页</RouterLink>,
    <RouterLink to='/start'>跳过</RouterLink>,
  ],
}

// 函数式组件-无状态
const Third: FunctionalComponent = () => <WelcomeLayout v-slots={slots} />

export default Third
