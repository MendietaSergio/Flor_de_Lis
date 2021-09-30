import "./Input.css"

export const Input =({
    type,
    className="",
    name,
    placeHolder,
    label,
    defaultValue,
    register,
    validation,
    error
}) => {
    return(
        <div className={`mb-3 ${className}`}>
            <label className="form-label w-100">
                {label && label}
                <input 
                name={name}
                label={label}
                placeholder={placeHolder}
                defaultValue={defaultValue}
                className={`form-control ${error ? 'input-error':''}`}
                {...register(name,validation)}
                autoComplete="off"
                autoCorrect="off"
                />
            </label>
            {error ? <p className="text-danger">{error.message}</p>: null}

        </div>
    )
}