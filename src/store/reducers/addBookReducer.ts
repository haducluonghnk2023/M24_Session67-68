const initalAddBook: any[] = [];

const reducerAddBook = (state = initalAddBook, action: any) => {
  switch (action.type) {
    case "ADD":
        console.log([...state, action.payload]);
        return [...state, action.payload];
    default:
      return state;
  }
};
export default reducerAddBook;
