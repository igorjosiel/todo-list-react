import './label.style.css';

export function Label({ children, ...rest }) {
    return <label {...rest} className='label'>{children}</label>
}
