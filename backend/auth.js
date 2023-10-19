//import { Router } from 'express'
//import { google } from 'googleapis'
//import { BACKEND_URL } from '../config/config'
//import { API_KEY, CLIENT_ID, CLIENT_SECRET } from '@env';

//export const auth = Router()
//const oauth2Client = new google.auth.OAuth2({
//    clientId: CLIENT_ID,
//    clientSecret: CLIENT_SECRET,
//    redirectUri: `${BACKEND_URL}/login_redirect`,
//},
//)

//auth.post('/authlink', (req, res) => {
//    try {
//        const scopes = [
//            'https://www.googleapis.com/auth/userinfo.email',
//            'https://www.googleapis.com/auth/userinfo.profile',
//            'https://www.googleapis.com/auth/calendar.events.owned',
//        ]
//        const url = oauth2Client.generateAuthUrl({
//            access_type: 'offline',
//            scope: scopes,
//            prompt: 'consent',
//        })
//        res.json({ authLink: url })
//    }
//    catch (error) {
//        console.error(error)
//        res.json({ error: error.message })
//    }
//})

//export const getGoogleAuthLink = async () => {
//    const response = await backend.post('/authlink')
//        .then((res) => {
//            return res.data
//        })
//        .catch((error) => {
//            console.error(`Error getting google auth link: ${error.message}`)
//            return null
//        })
//    return response?.authLink
//}