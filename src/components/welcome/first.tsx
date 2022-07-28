import { defineComponent } from 'vue';

const First = defineComponent({
  setup(props, context) {
    return () => (
      <div>first</div>
    );
  }
})

export default First;