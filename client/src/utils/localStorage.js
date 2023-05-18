// >descrition: exporting book queries

export const getSavedBookIds = () => {
    const savedBookIds = localStorage.getItem('saved_books')
      ? JSON.parse(localStorage.getItem('saved_books'))
      : [];
  
    return savedBookIds;
  };
  
// >description: exporting saved book by ID

  export const saveBookIds = (bookIdArr) => {
    if (bookIdArr.length) {
      localStorage.setItem('saved_books', JSON.stringify(bookIdArr));
    } else {
      localStorage.removeItem('saved_books');
    }
  };
  
// >description: exporting removal of book by ID

  export const removeBookId = (bookId) => {
    const savedBookIds = localStorage.getItem('saved_books')
      ? JSON.parse(localStorage.getItem('saved_books'))
      : null;
  
    if (!savedBookIds) {
      return false;
    }
  
    const updatedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
    localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));
  
    return true;
  };
  