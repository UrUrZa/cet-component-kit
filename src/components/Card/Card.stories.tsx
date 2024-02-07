import { Meta } from '@storybook/react';
import { Card, ICardProps } from '.';
import { Typography } from '@mui/material';
import React from 'react';


export default {
    title: 'Component/Card',
} as Meta;

const componentDefaultProps: ICardProps = {
    children: [],
    onClick: ()=>console.log('click'),
}

const chaild1 = <Typography> Top Left</Typography>
const chaild2 = <Typography> Top Right</Typography>
const chaild3 = <Typography> Bottom Left</Typography>
const chaild4 = <Typography> Bottom Right</Typography>

export const CardStory = () => {
    const componentProps: ICardProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <Card {...componentProps}/>
            <Card {...componentProps} children={[chaild1]}/>
            <Card {...componentProps} children={[chaild1, chaild2]}/>
            <Card {...componentProps} children={[chaild1, chaild2, chaild3]}/>
            <Card {...componentProps} children={[chaild1, chaild2, chaild3, chaild4]}/>
            <Card {...componentProps} children={[chaild1, undefined, chaild3, undefined]}/>
            <Card {...componentProps} children={[undefined, chaild2, undefined, chaild4]}/>
            <Card {...componentProps} children={[undefined, undefined, chaild3, chaild4]}/>
            <Card {...componentProps} children={[chaild1, chaild2, undefined, undefined]}/>
        </>
    );
}
