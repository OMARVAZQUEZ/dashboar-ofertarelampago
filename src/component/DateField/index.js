import styles from "./index.module.sass";
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("es", es);

const DateField = props => {
  const [focus, setFocus] = useState(false);
  const { input, label, className, ...container } = props;
  const { error, $$name, ...inputHTMLAttributes } = input;
  const open = !!input.value || !!focus;

  const classNameString =
    styles.TextFieldRoot +
    " " +
    (open ? styles.open : styles.close) +
    " " +
    (focus ? styles.focus : "") +
    " " +
    (input.error ? styles.error : "") +
    " " +
    (props.className || "");

  return (
    <div
      {...{
        className: classNameString,
        ...container
      }}
    >
      <label htmlFor={input.id}>{label}</label>
      <DatePicker
        {...{
          selected: new Date(inputHTMLAttributes.value),
          name: $$name,
          onChange: date => {
            inputHTMLAttributes.onChange({
              target: {
                value: date
              }
            });
          },
          onCalendarOpen: e => {
            if (input.onFocus) input.onFocus(e);
            setFocus(true);
          },
          onCalendarClose: e => {
            if (input.onBlur) input.onBlur(e);
            setFocus(false);
          },
          placeholder: focus ? input.placeholder || "" : ""
        }}
        locale="es"
        dateFormat="P p"
        timeIntervals={1}
        timeCaption="time"
        timeFormat="HH:mm"
        showTimeSelect={true}
      />

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default DateField;
