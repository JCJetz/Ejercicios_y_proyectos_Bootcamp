function InputHijo({onFilterChange}){ 
    return (
        <>
            <input onChange={e => onFilterChange(e.target.value)} placeholder="Enviar desde el hijo"></input>
        </>
    )
}

export default InputHijo;