<template>
  <div>
    <h1>Page index</h1>
    <button @click="isNoteFormActive = true">Create New</button>

    <div class="c-notes-container" style="padding: 16px;">
      <div
        v-for="(note, index) in notes.data"
        class="c-notes-card"
        :key="index"
        @click="editNote(note)"
      >
        <p class="c-notes-card__title">
          <strong>{{ note.title }}</strong>
        </p>
        <p class="c-notes-card__content">{{ note.content }}</p>
      </div>
    </div>

    <AppLoader :is-loading="notes.loading" />
    <NoteForm
      :is-active="isNoteFormActive"
      :on-close="onNoteFormClose"
      :is-edit="isEditingNote"
      :note-data="noteToEdit"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AppLoader from "../components/AppLoader";
import NoteForm from "../components/NoteForm";

export default {
  layout: "default",
  name: "PageIndex",
  components: {
    AppLoader,
    NoteForm,
  },
  data() {
    return {
      isNoteFormActive: false,
      isEditingNote: false,
      noteToEdit: null,
    };
  },
  computed: {
    ...mapState({
      testState: (state) => state.notes.testState,
      notes: (state) => state.notes.notes,
    }),
  },
  methods: {
    ...mapActions({
      loadNotes: "notes/loadNotes",
    }),

    editNote(note) {
      this.isNoteFormActive = true;
      this.isEditingNote = true;
      this.noteToEdit = note;
    },

    onNoteFormClose() {
      this.isNoteFormActive = false;
      if (this.isEditingNote) {
        console.log('exit from edit mode')
        this.isEditingNote = false;
        this.noteToEdit = null;
      }
    },
  },
  mounted() {
    this.loadNotes();
  },
};
</script>

<style scoped>
.c-notes-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.c-notes-card {
  border: 1px solid rgba(0, 0, 0, 0.45);
  border-radius: 8px;
  width: 160px;
  padding: 16px;
  margin: 0 8px 24px 8px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
}
.c-notes-card:hover {
  box-shadow: 4px 2px 8px 2px rgba(0, 0, 0, 0.15);
}
</style>
