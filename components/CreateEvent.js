import * as React from "react";

import { apiCalendar } from "../calendarConfig";

const CreateEvent = () => {

    const createEvent = async () => {
        const eventFromNow = {
            summary: "Poc Dev From Now",
            time: 480,
        };

        apiCalendar
            .createEventFromNow(eventFromNow)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <View>
            <Button
                title="Create Event"
                onPress={createEvent()}
            />
        </View>
    );
}

export default Home;