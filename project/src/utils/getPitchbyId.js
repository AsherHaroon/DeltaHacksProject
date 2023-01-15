import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase-config"

export const getPitchById = async (pitchid) => {
    const docRef = doc(db, "pitches", pitchid)
    const docSnap = await getDoc(docRef)

    console.log("SUCCESS, data:", docSnap.data())

    return docSnap.data()
}