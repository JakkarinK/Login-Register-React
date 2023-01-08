import React from 'react'

function InputBox(props) {
    return (
        <div className='inputBox' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '.5rem'
        }}>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange}
                style={{
                    padding: '5px',
                    borderRadius: '5px',
                    border: '1px solid gray',
                    outline: 'none'
                }}
            />
        </div>
    )
}

export default InputBox
