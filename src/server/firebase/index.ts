import { initializeApp } from 'firebase/app'
import {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
	measurementId
} from '$env/static/private'

const config = {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
	measurementId
}

const app = initializeApp(config)
