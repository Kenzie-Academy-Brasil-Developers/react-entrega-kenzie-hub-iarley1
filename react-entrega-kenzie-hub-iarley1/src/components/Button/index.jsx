export function Button ({type, text, loanding, effect}) {
    return (
        <button onClick={effect} type={type} disabled={loanding}>{text}</button>
    )
}