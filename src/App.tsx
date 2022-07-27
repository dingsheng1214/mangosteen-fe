import { defineComponent } from 'vue'

const App = defineComponent({
  setup() {
    return () => (
      <div>
        <header>
          <ul>
            <li>
              <router-link to='/'>Foo</router-link>
            </li>
            <li>
              <router-link to='/bar'>Bar</router-link>
            </li>
          </ul>
        </header>
        <router-view />
      </div>
    )
  },
})
export default App
