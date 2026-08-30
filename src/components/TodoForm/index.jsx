import { use } from 'react';
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import TodoContext from '../TodoProvider/TodoContext';
import './todo-form.style.css';

export function TodoForm({ onSubmit }) {
    const { selectedTodo } = use(TodoContext);

    return (
        <form action={onSubmit} className='todo-form'>
            <TextInput
                name="title"
                placeholder="Digite o título do item que deseja adicionar"
                required
                defaultValue={selectedTodo?.title}
            />

            <TextInput
                name="description"
                placeholder="Digite a descrição do item que deseja adicionar"
                required
                defaultValue={selectedTodo?.description}
            />

            <Button>
                Salvar item
            </Button>
        </form>
    );
}
