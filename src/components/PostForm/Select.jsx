import { forwardRef, useId } from "react";

function Select({
    options = [],
    label,
    className = '',
    ...props
}, ref) {
    const Id = useId();
    return (
        <div>
            {label && <label htmlFor={Id}>{label}</label>}
            <select id={Id} className={`${className}`} {...props} ref={ref}>
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default forwardRef(Select);