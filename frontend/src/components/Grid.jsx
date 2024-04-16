import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function DinamicGallery({ images }) {
  return (
    <Box className="w-full p-4">
      <ImageList variant="masonry" cols={3} gap={10}>
        {images.map((image) => (
          <ImageListItem key={image.id}>
            <article className="bg-transparent border-[#e6e6e6] border-2 rounded-sm overflow-hidden shadow-md p-6 text-slate-50 font-semibold text-xl">
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

