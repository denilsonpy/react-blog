import './styles.css'

export const SearchInput = ({ searchValue, actionfn }) => {
  return (
    <input
      className="search-input"
      onChange={actionfn}
      type="search"
      value={searchValue}
      placeholder="Type your search"
    />
  )
}
