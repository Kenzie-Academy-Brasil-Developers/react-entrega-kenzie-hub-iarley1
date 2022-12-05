export function Input ({placeholder, label, loginRegister, type}) {
    return (
        <>
          <label htmlFor="">{label}</label>
          <input type={type} placeholder={placeholder} {...loginRegister}/>
        </>
    )
}