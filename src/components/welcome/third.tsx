import { defineComponent } from 'vue';

const Third = defineComponent({
  setup(props, context) {
    return () => (
      <div>Third</div>
    );
  }
})

export default Third;