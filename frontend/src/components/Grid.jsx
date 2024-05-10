import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import trash from '../assets/icons/icons8-lixo.svg';
import { useState } from 'react';
import axios from 'axios';

export default function DinamicGallery({ images, handleDelete }) {
  const baseUrl = "http://localhost:3337";
  const [dropdownStates, setDropdownStates] = React.useState(
    images.map(() => false)
  );

  const handleDropdown = (index) => {
    setDropdownStates((prevStates) =>
      prevStates.map((prevState, i) => (i === index ? !prevState : prevState))
    );
  };

  return (
    <Box className="w-full p-4">
      <ImageList variant="masonry" cols={3} gap={10} >
        {images.map((image, index) => ( // Corrigindo para passar o índice como segundo parâmetro
          <ImageListItem key={image.id} >
            <article className="bg-transparent rounded-sm overflow-hidden shadow-md p-6 text-slate-50 font-semibold text-xl">
            <div onClick={() => handleDropdown(index)} className='deleteOption bg-white cursor-pointer float-right mb-2 border-[1px] border-slate-50 rounded-[50%] w-8 h-8 flex items-center justify-center'>
              <span className="text-slate-950">...</span>
            </div>
            {dropdownStates[index] && (
                <div className="dropdown bg-slate-50 px-6 py-2 rounded-sm absolute top-14 right-10 text-slate-950 font-normal text-base font-semibold hover:bg-slate-200">
                  <ul className='rounded'>
                    <li onClick={() => handleDelete(image.id)} className="flex justify-between w-full cursor-pointer">
                      <img src={trash} alt="a trash icon" />
                      Delete
                    </li>
                  </ul>
                </div>
              )}
         
            <img
              src={image.url}
              alt={image.description}
              loading="lazy"
            />
            <span>{image.description}</span>
            </article>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

