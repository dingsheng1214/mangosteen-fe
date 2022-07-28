import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import card_logo from '../../assets/icons/welcome_4.svg';
import style from './common.module.scss';

const Third = defineComponent({
  setup(props, context) {
    return () => (
      <div class={style.wrapper}>
        <div class={style.card}>
          <img src={card_logo} alt="card_logo" />
          <h2>数据可视化<br />收支一目了然</h2>
        </div>
        <div class={style.actions}>
          <RouterLink class={style.skip} to="/start">跳过</RouterLink>
          <RouterLink to="/start">开启应用</RouterLink>
          <RouterLink class={style.skip} to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  }
})

export default Third;