import { writable, type Writable } from 'svelte/store'

const user: Writable<User> = writable()
export default user

export const setUser = (u: User) => {
	user.set(u)
}
