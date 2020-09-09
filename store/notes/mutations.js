import { defaultState } from "./state";

export default {
  beginLoadNotes(state) {
    state.notes = { ...defaultState };
  },
  setNotes(state, { notes }) {
    state.notes = {
      loading: false,
      data: notes,
      error: false,
      errorMsg: null,
    };
  },
  failedLoadNotes(state, { errorMsg }) {
    state.notes = {
      loading: false,
      data: null,
      error: true,
      errorMsg: errorMsg,
    };
  },

  beginAddNote(state) {
    state.notes = {
      ...state.notes,
      loading: true,
      error: false,
      errorMsg: null,
    }
  },
  addNote(state, { note }) {
    state.notes = {
      loading: false,
      data: state.notes.data ? [...state.notes.data, note] : [note],
      error: false,
      errorMsg: null,
    }
  },
  failedAddNote(state, { errorMsg }) {
    state.notes = {
      ...state.notes,
      loading: false,
      error: true,
      errorMsg,
    }
  },

  beginUpdateNote(state) {
    state.notes = {
      ...state.notes,
      loading: true,
      error: false,
      errorMsg: null,
    }
  },
  updateNote(state, { note }) {
    const newNotes = state.notes.data.map((nt) => {
      if (nt.id === note.id) {
        return { ...note };
      }

      return nt;
    });

    state.notes = {
      loading: false,
      data: newNotes,
      error: false,
      errorMsg: null,
    };
  },
  failedUpdateNote(state, { errorMsg }) {
    state.notes = {
      ...state.notes,
      error: true,
      errorMsg,
    };
  },
};
