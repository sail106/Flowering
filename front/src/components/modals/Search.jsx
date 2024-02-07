import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { CiSearch } from 'react-icons/ci';
import axios from 'axios';

// 스타일 컴포넌트 정의
const InputDiv = styled.div`
  display: flex;
  width: 95%;
  background-color: white;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 5%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
`;

const Icon = styled(CiSearch)`
  font-size: 20px;
  margin: 10px;
`;

const AutocompleteList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 5;
  max-height: 200px;
  overflow-y: auto;
`;

const AutocompleteItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  &:hover {
    background-color: #f0f0f0;
  }
  img {
    width: 50px;
    margin-right: 10px;
  }
`;

function SearchModal() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [autocompleteItems, setAutocompleteItems] = useState([]);

  const fetchAutocompleteItems = async () => {
    if (!inputValue) return setAutocompleteItems([]);

    try {
      const response = await axios.get(`http://localhost:8080/v1/product/search?query=${encodeURIComponent(inputValue)}&display=5&start=1&sort=sim`);
      setAutocompleteItems(response.data.data_body);
    } catch (error) {
      console.error('Error fetching autocomplete data:', error);
    }
  };

  useEffect(() => {
    if (inputValue) {
      const delayDebounce = setTimeout(() => {
        fetchAutocompleteItems();
      }, 300);

      return () => clearTimeout(delayDebounce);
    } else {
      setAutocompleteItems([]);
    }
  }, [inputValue]);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Search Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          sx={{
            maxWidth: 600,
            width: '100%',
            borderRadius: "md",
            p: 2,
            boxShadow: "lg",
            position: 'relative'
          }}
        >
          <ModalClose variant="plain" onClick={() => setOpen(false)} sx={{ position: 'absolute', right: 8, top: 8 }} />
          <InputDiv>
            <Icon />
            <Input
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {autocompleteItems.length > 0 && (
              <AutocompleteList>
                {autocompleteItems.map((item, index) => (
                  <AutocompleteItem
                    key={index}
                    onClick={() => setInputValue(item.product_name)}
                  >
                    <img src={item.product_image_uri} alt={item.product_name.replace(/<b>|<\/b>/g, '')} />
                    <div dangerouslySetInnerHTML={{ __html: item.product_name }} /> - {item.price}원
                  </AutocompleteItem>
                ))}
              </AutocompleteList>
            )}
          </InputDiv>
        </Sheet>
      </Modal>
    </>
  );
}

export default SearchModal;
