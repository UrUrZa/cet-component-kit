import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { TextField, ITextFieldProps, TextFieldType } from '.';
import { Box } from '@mui/material';

export default {
    title: 'Component/TextField',
} as Meta;

const componentDefaultProps: ITextFieldProps = {
    text:'Example text',
    type: TextFieldType.header,
    onChange: console.log,
}

export const TextFieldStory = () => {
    const componentProps: ITextFieldProps = {
        ...componentDefaultProps,
    }
    const [text, setText] = useState('text');
    const onChange = (text: string) => {
        setText(text);
    }
    return (
        <>
            <TextField 
                {...componentProps} 
                onChange={onChange} 
                text={text} 
                placeHolder='Example header'
                style={{marginBottom:'20px'}}
            />
            <TextField 
                {...componentProps} 
                onChange={onChange} 
                text={text} 
                placeHolder='Example textArea' 
                type={TextFieldType.textArea}
                style={{marginBottom:'20px'}}
            />

            <TextField 
                {...componentProps} 
                onChange={onChange} 
                text={text} 
                placeHolder='Example modalControl'
                type={TextFieldType.modalControl}
                style={{marginBottom:'20px'}}
            />
        </>
    );
}

export const LongTextTextFieldStory = () => {
    const componentProps: ITextFieldProps = {
        ...componentDefaultProps,
    }
    const [text, setText] = useState( 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tenetur officia sequi impedit, fugiat atque? Rem reiciendis, nulla accusantium quo quas blanditiis totam laborum iste ut cumque nemo vitae repellat delectus impedit dicta eum ab quia sint. Ex quibusdam quis, laudantium at, voluptates exercitationem veniam temporibus corporis vitae unde dolorum.' );
    const onChange = (text: string) => {
        setText(text);
    }
    return (
        <Box 
            height='100px'
            border='1px solid black'
            padding='10px'
        >
            <TextField 
                {...componentProps} 
                onChange={onChange} 
                text={text}
                type={TextFieldType.textArea} 
                placeHolder='Example textArea'
            />
        </Box>
    );
}