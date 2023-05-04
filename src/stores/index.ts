import { useGlobalState } from './resize.ts'

export default defineComponent({
  setup() {
    const state = useGlobalState()
    return { state }
  },
})