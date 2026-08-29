import './empty-state.style.css';

export function EmptyState() {
    return (
        <section className='empty-state'>
            <p>Não existem tarefas a estudar, adicione para começar!</p>

            <img src="/empty.png" alt="" />
        </section>
    );
}
