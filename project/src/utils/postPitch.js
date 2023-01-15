import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const postPitch = async (data) => {
    const docRef = await addDoc(collection(db, "pitches"), data)
    return docRef.id;
}