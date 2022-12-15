export function Input ({placeholder, label, loginRegister, type, disabled, value}) {
    return (
        <>
          <label htmlFor="">{label}</label>
          <input value={value} type={type} placeholder={placeholder} {...loginRegister} disabled={disabled}/>
        </>
    )
}