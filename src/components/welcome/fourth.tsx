import { defineComponent } from 'vue';

const Fourth = defineComponent({
  setup(props, context) {
    return () => (
      <div>Fourth</div>
    );
  }
})

export default Fourth;