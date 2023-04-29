import React , { useState } from 'react';
import { IconButton } from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import SendIcon from '@mui/icons-material/Send';
import { Box } from "@mui/system";


export default function Reaction({children,sx={}}) {
    const [isFavorite, setIsFavorite] = useState(true);
    const [isBookmark, setIsBookmark] = useState(true);
    const [isComment, setIsComment] = useState(true);

    const handleClickFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    const handleClickBookmark = () => {
        setIsBookmark(!isBookmark);
    };
    const handleClickComment = () => {
        setIsComment(!isComment);
    };

    return (
        <Box sx={{px:1.5, py:0.85}}>
            <IconButton aria-label="Me gusta" onClick={handleClickFavorite}>
                {isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
            </IconButton>
            <IconButton aria-label="Guardar" onClick={handleClickBookmark}>
                {isBookmark ? <BookmarkBorderIcon /> : <BookmarkIcon />}
            </IconButton>
            <IconButton aria-label="Comentar" onClick={handleClickComment}>
                {isComment ? <ChatBubbleOutlineIcon fontSize="small" /> : <ChatBubbleIcon fontSize="small"/>}
            </IconButton>
            <IconButton aria-label="Enviar a" >
                <SendIcon fontSize="small"/>
            </IconButton>
        </Box>
    );
}