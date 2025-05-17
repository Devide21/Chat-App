import { Autocomplete, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const RHFAutoComplete = ({ name, label, options, multiple = false }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <Autocomplete
          multiple={multiple}
          options={options}
          getOptionLabel={(option) => option.name || ""}
          isOptionEqualToValue={(option, val) => option.id === val.id}
          value={value || []}
          onChange={(_, newValue) => onChange(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={!!error}
              helperText={error?.message}
            />
          )}
          ref={ref}
        />
      )}
    />
  );
};

export default RHFAutoComplete;
