import React from 'react';
import './SearchInput.scss';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';


interface SearchInputProps {
  onChange: Function
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }: SearchInputProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={`search-input`} data-testid="search-input-field">

      <Paper onSubmit={submitForm} component="form" className={`search-paper`}>
        <InputBase
          className={`search-input`}
          placeholder="Encontre o seu país"
          inputProps={{ 'aria-label': 'Encontre o seu país' }}
          onChange={handleChange}
        />
        <IconButton type="submit" className={`search-iconButton`} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchInput;
