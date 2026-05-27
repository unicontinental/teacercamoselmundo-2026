import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

window.Alpine = Alpine

Alpine.plugin(collapse)

Alpine.data('videoModal', (videoId) => ({
  isOpen: false,
  get embedUrl() {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
  },
  open() {
    this.isOpen = true
    this.$nextTick(() => {
      if (this.$refs.iframe) this.$refs.iframe.src = this.embedUrl
    })
  },
  close() {
    this.isOpen = false
    if (this.$refs.iframe) this.$refs.iframe.src = ''
  },
}))

Alpine.start()
