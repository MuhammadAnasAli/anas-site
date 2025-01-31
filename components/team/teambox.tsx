'use client'
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Img from '../../public/background.jpg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

let teamdata = [
    { name: 'XYZ', img: Img, desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eaque mollitia,omnis amet voluptate iste. Voluptatem totam, sunt aperiam error tempore,aspernatur inventore eum, reprehenderit voluptas veniam temporibus distinctio quae.' },
    { name: 'XYZ', img: Img, desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eaque mollitia,omnis amet voluptate iste. Voluptatem totam, sunt aperiam error tempore,aspernatur inventore eum, reprehenderit voluptas veniam temporibus distinctio quae.' },
    { name: 'XYZ', img: Img, desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eaque mollitia,omnis amet voluptate iste. Voluptatem totam, sunt aperiam error tempore,aspernatur inventore eum, reprehenderit voluptas veniam temporibus distinctio quae.' },
]
export default function ResponsiveGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {teamdata.map((val, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <div className='individual_team'>
                            <div className="circular--portrait">
                                <Image src={val.img} alt='img' />
                            </div>
                            <h3>{val.name}</h3>
                            <p>{val.desc}</p>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}