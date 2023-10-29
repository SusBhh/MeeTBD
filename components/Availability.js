const { google } = require('googleapis');
const calendar = google.calendar('v3');

//change later to customize options of which calendar(s)
const calendarId = 'primary'; 

//timeMin is current time and timeMax is 7 days into the future from the current time
const timeMin = new Date().toISOString();
const timeMax = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString();