// CSS
import "../../css/Theme.css";
import "../../css/Search.css";
// React Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBar = ({ keywordFilterHandler, setKeyword, placeholder }) => {
  return (
    <div class='header'>
      <Form id='search-students'>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='basic-addon1' className='search-prepend'>
              Find
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder={placeholder}
            aria-label='text'
            aria-describedby='basic-addon1'
            className='search-bar'
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </InputGroup>
        <Button
          type='submit'
          className='search-btn'
          onClick={keywordFilterHandler}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
