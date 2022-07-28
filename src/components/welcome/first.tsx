import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import card_logo from '../../assets/icons/welcome_1.svg';
import style from './First.module.scss';

const First = defineComponent({
  setup(props, context) {
    return () => (
      <div class={style.wrapper}>
        <div class={style.card}>
          <img src={card_logo} alt="card_logo" />
          <h2>会挣钱<br />还要会省钱</h2>
        </div>
        <div class={style.actions}>
          <RouterLink class={style.skip} to="/start">跳过</RouterLink>
          <RouterLink class={style.next} to="/welcome/2">下一页</RouterLink>
          <RouterLink class={style.skip} to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  }
})

export default First;