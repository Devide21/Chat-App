import propTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

RHFTextField.propTypes = {
    name: propTypes.string.isRequired,
    helperText: propTypes.node,
}


export default function RHFTextField({ name, helperText, ...other }) {

    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <input
                    {...field}
                    width={'100%'}
                    value={field.value === "number" && field.value === 0 ? "" : field.value}
                    error={!!error}
                    helperText={error ? error.message : helperText}
                    {...other}
                />
            )
            } />
    )
} 