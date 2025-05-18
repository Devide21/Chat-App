import propTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

RHFTextField.propTypes = {
    name: propTypes.string.isRequired,
    label: propTypes.string,
    helperText: propTypes.node,
    InputProps: propTypes.object,
};

export default function RHFTextField({ name, helperText, InputProps, ...other }) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                const finalProps = {
                    ...field,
                    ...other,
                    className: `form-control text-secondary ${error ? 'is-invalid' : ''} `,
                    value: typeof field.value === "number" && field.value === 0 ? "" : field.value,
                };

                return (
                    <div className="position-relative mb-2">
                        <input {...finalProps} />
                        {InputProps && InputProps.endAdornment && !error && (
                            <div
                                className="position-absolute top-50 end-0 translate-middle-y me-3 "
                                style={{ cursor: "pointer" }}
                            >
                                {InputProps.endAdornment}
                            </div>
                        )}
                        {error && <div className="invalid-feedback">{error.message || helperText}</div>}
                    </div>
                );
            }}
        />
    );
}
