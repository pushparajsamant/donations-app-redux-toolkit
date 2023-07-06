import React, {useRef, useState} from 'react';
import styles from './style';
import {Pressable, TextInput, View} from 'react-native';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import PropTypes from 'prop-types';
const Search = props => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');
  const handleFocus = () => {
    textInputRef.current.focus();
  };

  function handleSearch(value) {
    setSearch(value);
    props.onSearch(value);
  }

  return (
    <Pressable style={styles.searchViewContainer} onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color={'#25C0FF'} size={22} />
      <TextInput
        ref={textInputRef}
        style={styles.searchInput}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
};
Search.default = {
  onSearch: () => {},
};
Search.propTypes = {
  onSearch: PropTypes.func,
};
export default Search;
