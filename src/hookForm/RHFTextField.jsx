import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

export default function RHFTextField({ name, helperText, ...other }) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className="w-100">
                    <input
                        {...field}
                        {...other}
                        className={`mb-2 fs-6 rounded-2 text-secondary form-control ${error ? 'is-invalid' : ''}`}
                    />
                    {error?.message || helperText ? (
                        <div className="invalid-feedback d-block">
                            {error?.message || helperText}
                        </div>
                    ) : null}
                </div>
            )}
        />
    );
}

RHFTextField.propTypes = {
    name: PropTypes.string.isRequired,
    helperText: PropTypes.node,
};
