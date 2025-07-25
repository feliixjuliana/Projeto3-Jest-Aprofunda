import bookFactory from "../factories/book-factory";
import BookStorage from "../storage/book-storage";

interface BookData {
    title: string
    bookGenres: string
    status: string
    exemplaryQuantity: number
    author: string
}

interface Book extends BookData {
    id: string
    created_at: string
}

export default {
    createBook: ({ title, bookGenres, status, exemplaryQuantity, author }: BookData): Book => {
        const newBook = bookFactory.create({ title, bookGenres, status, exemplaryQuantity, author });
        BookStorage.add(newBook);
        return newBook;

    },

    getAllBooks: (): Book[] => {
        return BookStorage.getAll();
    },

    updateBook: (id: string, data: Partial<BookData>): Book | null => {
        const book = BookStorage.getById(id);

        if (!book) {
            return null
        }

        if (data.title != null) book.title = data.title;

        if (data.bookGenres != null) book.bookGenres = data.bookGenres;

        if (data.status != null) book.status = data.status;

        if (data.exemplaryQuantity != null) book.exemplaryQuantity = data.exemplaryQuantity;

        if (data.author != null) book.author = data.author;

        return book;

    },

    deleteBookById: (id: string): Book[] => {
        return BookStorage.deleteBook(id)
    }
}