import { getDoc, FieldValue, updateDoc } from "firebase/firestore"

export const invest = async (sender, receiver, amount) => {
    const senderDocRef = doc(db, "users", sender)
    const senderDocSnap = await getDoc(senderDocRef)
    const investment = {receiver, amount}
    let bal = senderDocSnap.data().balance
    let investments = senderDocSnap.data().investments
    if (bal < amount) {
        return false
    }
    await updateDoc(senderDocRef, {
        investments: investments.push(investment),
        balance: bal - amount
    })

    const receiverDocRef = doc(db, "pitches", receiver)
    await updateDoc(receiverDocRef, {investors: FieldValue.increment()})

    return true
}