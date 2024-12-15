import React, {FormEventHandler, useState} from "react";
import whatsapp from "../static/vk.webp";
import DatePicker from "react-datepicker";
import moment from "moment-timezone";
import InputMask from "react-input-mask";

const RequestForm: React.FC = () => {
    const [telInput, setTelInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<String | null>(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    function handleTelInput(e: React.ChangeEvent<HTMLInputElement>) {
        let inputValue = e.target.value;
        let lastChar = inputValue.charAt(inputValue.length - 1);
        if (isNaN(Number(lastChar)) || (lastChar === ' ') || (inputValue.length === 16)) {
            e.target.value = inputValue.slice(0, -1);
            if (inputValue.endsWith(") "))
                e.target.value = inputValue.slice(0, -2);
            return;
        }

        if (inputValue.length === 1)
            e.target.value = '(' + inputValue;
        if (inputValue.length === 5)
            e.target.value = inputValue.slice(0, 4) + ") " + lastChar;
        if (inputValue.length === 10)
            e.target.value = inputValue.slice(0, -1) + "-" + lastChar;
        if (inputValue.length === 13)
            e.target.value = inputValue.slice(0, -1) + "-" + lastChar;
        setTelInput(e.target.value);
    }

    function handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
        let inputValue = e.target.value;
        let lastChar = inputValue.charAt(inputValue.length - 1);
        if (!(/^[a-zA-Zа-яА-Я-]+$/.test(lastChar))) {
            e.target.value = inputValue.slice(0, -1);
        }
        setNameInput(e.target.value);
    }

    function handleTimeInput(e: React.ChangeEvent<HTMLInputElement>) {
        let inputValue = e.target.value;
        setTime(e.target.value);
    }

    function handlePopupForm(event: React.FormEvent) {
        event.preventDefault();

        fetch("https://api.telegram.org/bot7798352943:AAF3A3Zy71ubXYwJQ8YM1O1oAPv_ZHBBVWk/sendMessage?chat_id=1639215243&text="
            + "Имя: " + nameInput + ", Телефон: " + telInput + ", Дата: " + (date == null ? '' : moment(date).format('DD.MM.YYYY')) + ", Время: " + time)
            .then(function () {
                setSuccess(true);
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                setError(true);
                throw error;
            });
    }

    return (
        <form className="popup_form" onSubmit={handlePopupForm}>
            <input className="popup_input" placeholder="Ваше имя" onInput={handleNameInput} required/>
            <input type="text" className="popup_input popup_input_tel" placeholder="(999) 999-99-99"
                   onInput={handleTelInput} defaultValue={""} required/>
            <span className="tel_span_popup">+7</span>
            <DatePicker selected={date}
                        onChange={(date) => setDate(date)}
                        minDate={moment().add(1, 'day').toDate()}
                        dateFormat={"dd.MM.YYYY"}
                        required={true}
                        placeholderText="Предполагаемая дата"
                        className="popup_input_date"/>
            <InputMask mask="99:99" maskChar="_">
                {(inputProps: any) => <input required className="popup_input_date" type="text" {...inputProps}
                                             placeholder="В какое время" onInput={handleTimeInput}/>}
            </InputMask>
            {success && <div className="success">Ваша заявка отправлена</div>}
            {error && <div className="error">Возникла ошибка при отправке заявки. Пожалуйста, свяжитесь с нами
              по номеру  <a href="tel:+79172575466" className="tel_link">+7 (917) 257-54-66</a></div>}
            <button className="popup_button" type="submit">Отправить заявку</button>
        </form>
    )
}

export default RequestForm;