import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import logo from '../assets/icons/mangosteen.svg';
import style from './Welcome.module.scss';

const Welcome = defineComponent({
  setup(props, context) {
    return () => (
      <div class={style.wrapper}>
        <header>
          <img src={logo} alt="logo"/>
          <h1>山竹记账</h1>
        </header>
        <main>
          <RouterView />
        </main>
      </div>
    );
  }
})

export default Welcome;