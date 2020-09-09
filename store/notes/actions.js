import { apiLoadNotes, apiAddNote, apiUpdateNote } from "../../api/notes";

export default {
  loadNotes({ commit }) {
    commit("beginLoadNotes");
    apiLoadNotes()
      .then((response) => {
        console.log("from loadNotes", response);
        commit("setNotes", { notes: response.data });
      })
      .catch((error) => {
        commit("failedLoadNotes", { errorMsg: error });
        throw new Error(error);
      });
  },

  addNote({ commit }, { note }) {
    commit("beginAddNote");
    apiAddNote()
      .then((response) => {
        console.log("from addNote", response);
        commit("addNote", { note });
      })
      .catch((error) => {
        commit("failedAddNote", { errorMsg: error });
        throw new Error(error);
      });
  },

  updateNote({ commit }, { note }) {
    commit("beginUpdateNote");
    apiUpdateNote()
      .then((response) => {
        console.log("from updateNote", response);
        commit("updateNote", { note });
      })
      .catch((error) => {
        commit("failedUpdateNote", { errorMsg: error });
        throw new Error(error);
      });
  },
};
