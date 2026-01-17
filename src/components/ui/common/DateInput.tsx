import { InputRowProps } from "@/src/interfaces/input-row.interface";
import { convertDateToString } from "@/src/utils/date-to-string";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useRef, useState } from "react";
import { Keyboard, Platform, TextInput, View } from "react-native";

export const DateInput = (props: InputRowProps) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isDateSelected, setDateSelected] = useState(false);
  const dateRef = useRef(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios"); // iOS stays open, Android closes on select
    setDate(currentDate);
    setDateSelected(true);
    dateRef.current?.blur();
  };

  const handleFocus = () => {
    setShow(true);
    Keyboard.dismiss();
  };

  return (
    <View>
      <TextInput
        ref={dateRef}
        value={isDateSelected ? convertDateToString(date.toString()) : ""}
        placeholder="Date de naissance"
        onFocus={handleFocus}
        className={props.className}
      ></TextInput>
      {show ? (
        <DateTimePicker
          value={date}
          mode="date"
          display="calendar"
          onChange={onChange}
        />
      ) : null}
    </View>
  );
};
