import app from '..'
import { doc, getFirestore, serverTimestamp, setDoc } from 'firebase/firestore'

const db = getFirestore(app)

export const addUser = async (email: string, uid: string) => {
	// const usersCollection = collection(db, 'users')
	const userDoc = doc(db, `users/${uid}`)
	try {
		setDoc(userDoc, { email, createdOn: serverTimestamp() })
	} catch (err) {
		throw err
	}
}
