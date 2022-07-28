import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import card_logo from '../../assets/icons/welcome_2.svg';
import style from './common.module.scss';

const Second = defineComponent({
  setup(props, context) {
    return () => (
      <div class={style.wrapper}>
        <div class={style.card}>
          <img src={card_logo} alt="card_logo" />
          <h2>每日提醒<br />不会遗漏一笔账单</h2>
        </div>
        <div class={style.actions}>
          <RouterLink class={style.skip} to="/start">跳过</RouterLink>
          <RouterLink to="/welcome/3">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  }
})

export default Second;