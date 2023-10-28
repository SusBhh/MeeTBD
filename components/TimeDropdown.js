import * as React from 'react';
import { View, Text } from 'react-native';
import { useState } from "react"

export default function TimeDropDown() {
    const [startTime, setStartTime] = useState('9');
    const [endTime, setEndTime] = useState('17');
    return (
        <View>
            <label>No earlier than</label>
            <select
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
            > 
                <option value="0">12:00 AM</option>
                <option value="1">1:00 AM</option>
                <option value="2">2:00 AM</option>
                <option value="3">3:00 AM</option>
                <option value="4">4:00 AM</option>
                <option value="5">5:00 AM</option>
                <option value="6">6:00 AM</option>
                <option value="7">7:00 AM</option>
                <option value="8">8:00 AM</option>
                <option value="9">9:00 AM</option>
                <option value="10">10:00 AM</option>
                <option value="11">11:00 AM</option>
                <option value="12">12:00 PM</option>
                <option value="13">1:00 PM</option>
                <option value="14">2:00 PM</option>
                <option value="15">3:00 PM</option>
                <option value="16">4:00 PM</option>
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
            </select>
            <label>No later than</label>
            <select
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
            >
                <option value="0">12:00 AM</option>
                <option value="1">1:00 AM</option>
                <option value="2">2:00 AM</option>
                <option value="3">3:00 AM</option>
                <option value="4">4:00 AM</option>
                <option value="5">5:00 AM</option>
                <option value="6">6:00 AM</option>
                <option value="7">7:00 AM</option>
                <option value="8">8:00 AM</option>
                <option value="9">9:00 AM</option>
                <option value="10">10:00 AM</option>
                <option value="11">11:00 AM</option>
                <option value="12">12:00 PM</option>
                <option value="13">1:00 PM</option>
                <option value="14">2:00 PM</option>
                <option value="15">3:00 PM</option>
                <option value="16">4:00 PM</option>
                <option value="17">5:00 PM</option>
                <option value="18">6:00 PM</option>
                <option value="19">7:00 PM</option>
                <option value="20">8:00 PM</option>
                <option value="21">9:00 PM</option>
                <option value="22">10:00 PM</option>
                <option value="23">11:00 PM</option>
            </select>
        </View>
    );
}