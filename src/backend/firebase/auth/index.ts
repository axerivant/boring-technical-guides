import { setUser } from '@/store/user'
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	setPersistence,
	browserLocalPersistence
} from 'firebase/auth'
import app from '..'

const auth = getAuth(app)

setPersistence(auth, browserLocalPersistence)

export const getLocalAuth = () => {
	return auth
}

export const createFirebaseUser = async (email: string, password: string) => {
	return createUserWithEmailAndPassword(auth, email, password)
}
export const enlistAuthStateListener = () => {
	onAuthStateChanged(auth, (user) => {
		if (!user || !user.email) return
		setUser({
			uid: user.uid,
			email: user.email
		})
		console.log(user)
	})
}
