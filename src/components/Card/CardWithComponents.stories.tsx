import { Meta } from '@storybook/react';
import { Card, ICardProps } from '.';
import { Avatar, Box, Typography } from '@mui/material';
import { IMenuOption, IconButtonMenu } from '../IconButtonMenu';
import React from 'react';


export default {
    title: 'Component/Card',
} as Meta;

const componentDefaultProps: ICardProps = {
    children: [],
    onClick: ()=>console.log('click'),
}

const AvatarUser = 
    <Box display='flex' alignItems='center'>
        <Avatar sizes='large' />
        <Typography padding='0px 10px' variant='h6'> Loren Ipsumidze</Typography>        
    </Box>

    const optionsIconButtonMenu: IMenuOption[] = [
        {
            title: 'edit',
            command: () => console.log('edit') 
        },
        {
            title: 'delete',
            command: () => console.log('delete')
        },
    ]

const IconMenu = 
    <IconButtonMenu options={optionsIconButtonMenu}/> 

const subtitle = <Typography variant='h6'> 5674 $</Typography>
const subtitle2 = <Typography variant='h6'> 1 participant</Typography>
const titleSubject = <Typography variant='h5'> Tatva Yoga</Typography>


export const CardWithComponentsStory = () => {
    const componentProps: ICardProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <Card {...componentProps}/>
            <Card {...componentProps} children={[AvatarUser]}/>
            <Card {...componentProps} children={[AvatarUser, IconMenu]}/>
            <Card {...componentProps} children={[AvatarUser, IconMenu, subtitle]}/>
            <Card {...componentProps} children={[AvatarUser, IconMenu, subtitle, subtitle2]}/>
            <Card {...componentProps} children={[AvatarUser, undefined, subtitle, undefined]}/>
            <Card {...componentProps} children={[undefined, IconMenu, undefined, subtitle2]}/>
            <Card {...componentProps} children={[undefined, undefined, subtitle, subtitle2]}/>
            <Card {...componentProps} children={[AvatarUser, IconMenu, undefined, undefined]}/>
            <br/>
            <Card {...componentProps} children={[titleSubject]}/>
            <Card {...componentProps} children={[titleSubject, IconMenu]}/>
            <Card {...componentProps} children={[titleSubject, IconMenu, subtitle]}/>
            <Card {...componentProps} children={[titleSubject, IconMenu, subtitle, subtitle2]}/>
            <Card {...componentProps} children={[titleSubject, undefined, subtitle, undefined]}/>
            <Card {...componentProps} children={[titleSubject, IconMenu, undefined, undefined]}/>
        </>
    );
}
