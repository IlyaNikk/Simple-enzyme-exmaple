import React, {useState, useRef} from 'react';
import './App.css';

function App() {
    const [texts, changeText] = useState([]);
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputRef.current && inputRef.current.value) {
            changeText([...texts, inputRef.current.value]);
            inputRef.current.value = '';
        }
    };

    return (
        <div className='app'>
            <div className='input-block'>
                <form
                    className='input-block__form'
                    onSubmit={handleSubmit}>
                    <label className='form__label'>Введите текст</label>
                    <input
                        name='text_input'
                        className='form__input'
                        placeholder='Введите сюда текст'
                        ref={inputRef}
                        data-marker='input-block/input' />
                    <button
                        type='submit'
                        data-marker='input-block/submit' >Отправить</button>
                </form>
            </div>
            <div className='output-block'>
                <span>Введенный ранее текст</span>
                <ul>
                    {texts.map((text, index) => (
                        <li 
                            key={text + index}
                            data-marker='output-block/text'>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
