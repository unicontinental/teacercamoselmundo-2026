import Alpine from 'alpinejs'
 
window.Alpine = Alpine

Alpine.data('videoModal', () => ({
  isOpen: false,
  videoId: '295KN-hbnZ8',
  get embedUrl() {
    return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&rel=0`
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
