import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
  const { searched, setSearched } = props;

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={searched}
        type="text"
        onChange={({ target }) => setSearched(target.value)}
      />
    </>
  );
}

export default Search;
