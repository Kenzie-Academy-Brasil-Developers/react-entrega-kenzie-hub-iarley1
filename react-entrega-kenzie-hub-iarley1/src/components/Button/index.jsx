export function Button ({type, text, loanding}) {
    return (
        <button type={type} disabled={loanding}>{text}</button>
    )
}