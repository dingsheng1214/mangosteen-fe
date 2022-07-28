import { defineComponent } from 'vue';

const Second = defineComponent({
  setup(props, context) {
    return () => (
      <div>Second</div>
    );
  }
})

export default Second;