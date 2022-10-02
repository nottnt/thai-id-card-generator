import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import titleMock from '../../assets/mock/title.json'

const FormContainer = styled(Box)(`
    height: 100vh;
    display: flex;
    flex-direction: column;
`) as typeof Box;

const TextFieldExtended = styled(TextField)(`
    width: 45%;
    margin: 20px 0;
`);

const Row = styled(Box)(`
    display: flex;
    justify-content: space-around;
`) as typeof Box;

type TitleOption = {
    code: string;
    name_th: string;
    name_en: string;
    gender?: string;
    sort_order: number;
    backend: string;
}
const Index = (): JSX.Element => {
    const [title, setTitle] = useState('')
    const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value

        setTitle(value)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <FormContainer
                    component="form"
                >
                    <Row>
                        <TextFieldExtended
                            label="name-th"
                            id="name-th"
                            defaultValue="สมชาย"
                            size="small"
                        />
                        <TextFieldExtended
                            label="name-eng"
                            id="name-eng"
                            defaultValue="somchai"
                            size="small"
                        />
                    </Row>
                    <Row>
                        <TextFieldExtended
                            label="last-name-th"
                            id="last-name-th"
                            defaultValue="ชาตรี"
                            size="small"
                        />
                        <TextFieldExtended
                            label="last-name-eng"
                            id="last-name-eng"
                            defaultValue="chartri"
                            size="small"
                        />
                    </Row>
                    <Row>
                        <TextFieldExtended
                            label="front card ID"
                            id="front-card-id"
                            defaultValue="1111111111119"
                            size="small"
                            sx={{
                                width: '95%'
                            }}
                        />
                    </Row>
                    <Row>
                        <TextFieldExtended
                            label="back card ID"
                            id="front-card-id"
                            defaultValue="ME012345678910"
                            size="small"
                            sx={{
                                width: '95%'
                            }}
                        />
                    </Row>
                    <Row>
                        <TextField
                            id="select-title"
                            select
                            label="title"
                            value={title}
                            onChange={handleChangeSelect}
                            sx={{
                                width: '95%'
                            }}
                        >
                            {titleMock.map((option: TitleOption): JSX.Element => (
                                <MenuItem key={option.name_th} value={option.name_th}>
                                    {option.name_th}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Row>
                </FormContainer>
            </Container>
        </React.Fragment>
    )
}

export default Index