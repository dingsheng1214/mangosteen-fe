import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import card_logo from '../../assets/icons/welcome_4.svg';
import WelcomeLayout from './WelcomeLayout';
import style from './WelcomeLayout.module.scss';

const Fourth = defineComponent({
  setup(props, context) {
    const slots = {
        card_logo: () => <img src={card_logo} alt="card_logo" />,
        desc: () => <h2>云备份<br />再也不怕丢失数据</h2>,
        buttons: () => [
          <RouterLink to="/start">开启应用</RouterLink>                 ,
          <RouterLink class={style.skip} to="/start">跳过</RouterLink>
        ]
    }
    return () => <WelcomeLayout v-slots={slots} />;
  }
})

export default Fourth;