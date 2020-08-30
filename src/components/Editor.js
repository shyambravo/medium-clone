import React, {useState} from 'react';
import ReactQuill from 'react-quill';

export default function Editor() {

    const [text, setText] = useState(0);

    function handleChange(value) {
        setText(value);
    }
    return (
        <div className = "editor">
            <ReactQuill value={text}
             onChange={handleChange} />
        </div>
    )
}
