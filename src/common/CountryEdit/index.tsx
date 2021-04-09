import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getSetCountry } from '../../apollo/cache';

const useStyles = makeStyles(() => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  form: {
    display: 'flex',
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '8px',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '400px',
    maxWidth: 'calc(100% - 20px)',
  },
  input: {
    margin: '4px',
    flex: 1,
  },
  contentButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  button: {
    width: '49%',
  },
}));

interface ComponentProps {
  onSubmit: Function;
  onCancel: Function;
}

const CountryEdit: React.FC<ComponentProps> = ({ onSubmit, onCancel }: ComponentProps) => {

  const classes = useStyles();
  const [state, setState] = useState(getSetCountry());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (onSubmit) {
      getSetCountry(state)
      onSubmit(state);
    }
  };

  const cancelSubmit = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <form onSubmit={submitForm} className={classes.form} data-testid="country-edit-field">
      <TextField
        className={classes.input}
        label="Nome"
        required
        name="name"
        placeholder="Nome"
        value={state.name}
        inputProps={{ 'aria-label': 'pesquisa' }}
        onChange={handleChange}
      />

      <TextField
        className={classes.input}
        label="Capital"
        required
        name="capital"
        placeholder="Capital"
        value={state.capital}
        inputProps={{ 'aria-label': 'pesquisa' }}
        onChange={handleChange}
      />

      <TextField
        className={classes.input}
        label="Área"
        type="number"
        required
        name="area"
        placeholder="Área"
        value={state.area}
        inputProps={{ 'aria-label': 'pesquisa' }}
        onChange={handleChange}
      />

      <TextField
        className={classes.input}
        label="População"
        required
        type="number"
        name="population"
        placeholder="População"
        value={state.population}
        inputProps={{ 'aria-label': 'pesquisa' }}
        onChange={handleChange}
      />

      <div className={classes.contentButtons}>

        <Button variant="contained" color="secondary" className={classes.button} onClick={cancelSubmit}>
          Cancelar
        </Button>
        <Button variant="contained" type="submit" className={classes.button} color="primary">
          Salvar
        </Button>
      </div>

    </form>
  );
};

export default CountryEdit;
