export default {
  name: 'Modal',

  data () {
    return {
      name: ''
    }
  },

  props: {
    showModal: { type: Boolean, default: false }
  },

  methods: {
    close () {
      this.showModal = false
    },
    confirm () {
      this.$emit('confirm', this.name)
    }
  }
}