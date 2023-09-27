import React from 'react'
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
    return (
        <form className='input' onSubmit={handleAdd}>
            <input type='input' value={todo} onChange={(e) => setTodo(e.target.value)} pattern='Enter a task' className='input__box' />
            <button className='input_submit' type='submit'>Go</button>
        </form>
    )
}

export default InputField