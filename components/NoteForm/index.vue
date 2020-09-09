<template>
  <div class="c-note-form" :class="{ 'c-note-form--active': isActive }">
    <div class="c-note-form__backdrop" @click="onClose()"></div>
    <div class="c-note-form__content">
      <input
        type="text"
        name="title"
        id="title"
        placeholder="title"
        autocomplete="off"
        v-model="noteTitle"
      />
      <input
        type="text"
        name="content"
        id="content"
        placeholder="content"
        autocomplete="off"
        v-model="noteContent"
      />

      <button type="button" @click="onSaveClick()">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
      required: true,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      required: true,
    },
    noteData: {
      type: Object,
      default: null,
    },
  },
  name: "NoteForm",
  data() {
    return {
      noteTitle: "",
      noteContent: "",
    };
  },
  watch: {
    noteData(newVal) {
      if (newVal) {
        this.noteTitle = newVal.title;
        this.noteContent = newVal.content;
      }
    }
  },
  methods: {
    ...mapActions({
      addNote: "notes/addNote",
      updateNote: "notes/updateNote",
    }),

    async onSaveClick() {
      if (this.isActive && !this.isEdit) {
        const newNote = {
          id: Date.now(),
          title: this.noteTitle,
          content: this.noteContent,
        };

        await this.addNote({ note: { ...newNote } });
      } else {
        const newNote = {
          ...this.noteData,
          title: this.noteTitle,
          content: this.noteContent,
        };
        await this.updateNote({ note: { ...newNote } });
      }
      this.resetStates();
      this.onClose();
    },

    resetStates() {
      this.noteTitle = "";
      this.noteContent = "";
    },
  },
};
</script>

<style scoped>
.c-note-form {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  visibility: hidden;
  opacity: 0;
  transition: all 0.125s ease-in-out;
}
.c-note-form.c-note-form--active {
  visibility: visible;
  opacity: 1;
}

.c-note-form__backdrop {
  background: rgba(255, 255, 255, 0.85);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.c-note-form__content {
  background: orange;
  position: absolute;
  top: 40%;
  left: 50%;
  width: 250px;
  height: 250px;
  margin-top: -125px;
  margin-left: -125px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

input[type="text"] {
  padding: 16px 8px;
}
</style>
