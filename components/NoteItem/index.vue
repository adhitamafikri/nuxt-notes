<template>
  <div class="c-notes-card" @click="onClick(note)" :ref="refName">
    <p class="c-notes-card__title">
      <strong>{{ note.title }}</strong>
    </p>
    <p class="c-notes-card__content">{{ note.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'NoteItem',
  props: {
    note: {
      type: Object,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    }
  },

  data() {
    return {
      _isMouseDown: false,
      _interval: null,
    }
  },

  computed: {
    refName() {
      return `note-${this.note.id}`
    },
    refElement() {
      return this.$refs[this.refName]
    },
    _initialPosX() {
      return this.$refs[this.refName].getBoundingClientRect().x
    },
    _initialPosY() {
      return this.$refs[this.refName].getBoundingClientRect().y
    }
  },

  methods: {
    _onMouseDown(evt) {
      const elem = this.refElement
      elem.addEventListener('mouseleave', this._onMouseLeave)
      elem.addEventListener('mousemove', this._onMouseMove)

      this._isMouseDown = true
      this._interval = setInterval(() => {
        console.log('holding')
      }, 1000)
    },
    _onMouseUp(evt) {
      const elem = this.refElement
      elem.removeEventListener('mouseleave', this._onMouseLeave)
      elem.removeEventListener('mousemove', this._onMouseMove)

      this._isMouseDown = false
      clearInterval(this._interval)
      console.log('mouseup')
    },
    _onMouseLeave(evt) {
      const elem = this.refElement
      elem.removeEventListener('mouseleave', this._onMouseLeave)
      elem.removeEventListener('mousemove', this._onMouseMove)

      this._isMouseDown = false
      clearInterval(this._interval)
      console.log('mouseout')
    },
    _onMouseMove(evt) {
      console.log('mousemove', evt)
    },
  },

  mounted() {
    const elem = this.refElement

    elem.addEventListener('mousedown', this._onMouseDown)
    elem.addEventListener('mouseup', this._onMouseUp)
  },
}
</script>

<style scoped>
.c-notes-card {
  border: 1px solid rgba(0, 0, 0, 0.45);
  border-radius: 8px;
  width: 160px;
  padding: 16px;
  margin: 0 8px 24px 8px;
  cursor: pointer;
  transition: all 0.35s ease-in-out;
  user-select: none;
}
.c-notes-card:hover {
  box-shadow: 4px 2px 8px 2px rgba(0, 0, 0, 0.15);
}
</style>
