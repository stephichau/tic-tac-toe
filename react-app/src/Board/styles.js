export const styles = () => ({
  boardContainer: {
    padding: 8,
  },

  boardRowContainer: {
    padding: 4,

    '& > button:nth-child(odd)': {
      marginLeft: 8,
      marginRight: 8,
    }
  },
});
