import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import IDCard from '../../assets/images/id-card.png'

const IDCardIcon = styled(Box)(`
    width: 5rem;
    margin: 0 0.5rem;
`) as typeof Box;

const NavigatorContent = styled(Box)(`
    display: flex;
    align-items: center;
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
`) as typeof Box;


const index = (): JSX.Element => {
    return (
        <Box
            sx={{
                height: 80,
                backgroundColor: '#cfe8fc',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <NavigatorContent>
                <IDCardIcon
                    component="img"
                    alt="id-card"
                    src={IDCard}
                />
                <div>Thai ID Card Generator</div>
            </NavigatorContent>
        </Box>
    )
}

export default index