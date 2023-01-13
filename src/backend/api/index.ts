import { createFirebaseUser, getLocalAuth } from '@B/firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { addUser } from '../firebase/db'

export const createUser = async (
	email: string,
	password: string
): Promise<User> => {
	try {
		// create firebase user
		const userCredential = await createFirebaseUser(email, password)
		const uid = userCredential.user.uid
		// add user to db
		await addUser(email, uid)
		return {
			email,
			uid
		}
	} catch (err) {
		throw err
	}
}

export const signInUser = (email: string, password: string) => {
	const auth = getLocalAuth()
	return signInWithEmailAndPassword(auth, email, password)
}
