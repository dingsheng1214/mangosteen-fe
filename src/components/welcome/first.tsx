import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import card_logo from '../../assets/icons/welcome_1.svg';
import WelcomeLayout from './WelcomeLayout';


// 有状态组件
const First = defineComponent({
  setup(props, context) {
    return () => (
      <WelcomeLayout>
        {{
          card_logo: () => <img src={card_logo} alt="card_logo" />,
          desc: () => <h2>会挣钱<br />还要会省钱</h2>,
          buttons: () => <>
            <RouterLink to="/welcome/2">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
          </>
        }}
      </WelcomeLayout>
    );
  }
})

export default First;