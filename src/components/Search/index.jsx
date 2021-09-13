import Type from 'prop-types';

import './styles.css';

export const SearchInput = ({ searchValue, actionFn }) => {
  return (
    <input
      className="search-input"
      onChange={actionFn}
      type="search"
      value={searchValue}
      placeholder="Type your search"
    />
  );
};

SearchInput.propTypes = {
  searchValue: Type.string.isRequired,
  actionFn: Type.func.isRequired,
};
