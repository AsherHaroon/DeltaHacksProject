import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/firebase-config"

export const generateUser = async () => {
    const docRef = await addDoc(collection(db, "users"), USER_OBJ)
    return {id: docRef.id, name: USER_OBJ.name}
}

const USER_OBJ = {
    "name": "Saaeed Khan"
}