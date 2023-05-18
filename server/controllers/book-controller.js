//required imports/constants
const asyncHandler = require('express-async-handler');
const Book = require("../models/book");

// >description: get all the books
//route is get / api/book-routes
//access is private for now
const getAllBooks = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: 'blowing the dust off '})
  let books;
  if(!req.body.text) {
    res.status(400)
    throw new Error('No Products Found')
}
    res.status(200).json({ message: 'Your Book SirOrMaam '})
       
  }
);


// >description: get specific books
//route is get / api/book-routes
//access is private for now
const getBookByID = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ book });
}
);


// >description: add a books
//route is get / api/book-routes
//access is private for now
const setBooks = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ book });
};


// >description: update a books
//route is get / api/book-routes
//access is private for now
const putBooks  = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      id,
      author,
      genre,
      description,
      price,
      available,
      image,
     
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ book });
}
);


// >description: delete specific books
//route is get / api/book-routes
//access is private for now
// but why would you ever delete a book?

const deleteBooks = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
}
);

//exports

module.exports = {
    getAllBooks,
    setBooks,
    putBooks,
    deleteBooks,
    getBookByID,
}
