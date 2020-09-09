export const defaultState = {
  loading: true,
  data: null,
  error: false,
  errorMsg: null,
};

export default () => ({
  notes: { ...defaultState },
  selectedNote: {
    data: null,
  },
});
