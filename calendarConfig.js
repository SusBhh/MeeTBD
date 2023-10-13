import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId: "101201286652-003g9m57t01v0idpss6d0cchadlun1i2.apps.googleusercontent.com",
  apiKey: "AIzaSyBR94xvh8e-MFeyXN2NNR1VprCcrqKOmwM",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

export const apiCalendar = new ApiCalendar(config);
