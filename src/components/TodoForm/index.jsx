import { use } from 'react';
import { MdOutlineSaveAs } from "react-icons/md";
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import { Label } from '../Label';
import TodoContext from '../TodoProvider/TodoContext';
import './todo-form.style.css';

export function TodoForm({ onSubmit }) {
    const { selectedTodo } = use(TodoContext);

    return (
        <form action={onSubmit} className='todo-form'>
            <Label htmlFor="title">Título</Label>
            <TextInput
                name="title"
                id="title"
                placeholder="Digite o título do item que deseja adicionar"
                defaultValue={selectedTodo?.title}
                required
            />

            <Label htmlFor="description">Descrição</Label>
            <TextInput
                name="description"
                id="description"
                placeholder="Digite a descrição do item que deseja adicionar"
                defaultValue={selectedTodo?.description}
                required
            />

            <Button>
                Salvar item
                <MdOutlineSaveAs size={22} />
            </Button>
        </form>
    );
}
