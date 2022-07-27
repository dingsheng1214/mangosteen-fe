import { defineComponent, ref } from "vue";

const App = defineComponent({
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    }

    return () => (
      <div>
        <p>{count.value}</p>
        <button onClick={increment}>+1</button>
      </div>
    );
  }
})
export default App