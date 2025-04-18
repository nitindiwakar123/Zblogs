import { forwardRef, useId } from "react";

function Input({
    label = "",
    labelClassName="",
    type = "text",
    placeholder = "",
    className = "",
    parentClassName = "",
    ...props
}, ref) {
    const id = useId()

    return ( 
        <div className={`${parentClassName} w-full`}>
            {label && <label htmlFor={id} className={`${labelClassName}`}>{label}</label>}

            <input 
            type={type}
            id={id} 
            placeholder={placeholder}
            className={`${className} w-full outline-none`} 
            {...props}
            ref={ref}
             />
        </div>
     );
}

export default forwardRef(Input);