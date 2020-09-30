<template>
  <div>
    <h1>Page index</h1>
    <button @click="isNoteFormActive = true">Create New</button>

    <div class="c-notes-container" style="padding: 16px;">
      <NoteItem
        v-for="(note, index) in notes.data"
        :note="note"
        :key="index"
        :onClick="editNote"
      />
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
import NoteItem from "../components/NoteItem";

export default {
  layout: "default",
  name: "PageIndex",
  components: {
    AppLoader,
    NoteForm,
    NoteItem,
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
  position: relative;
}
</style>
