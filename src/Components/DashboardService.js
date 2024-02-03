import { db } from "../config/firebase";

import {
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "images");
class BookDataService {

  getAllBooks = () => {
    return getDocs(bookCollectionRef);
  };

  getBook = (id) => {
    const bookDoc = doc(db, "images", id);
    return getDoc(bookDoc);
  };
}

export default new BookDataService();