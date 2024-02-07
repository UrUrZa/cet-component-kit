import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { DropDownMenu, IDropDownMenuProps, IOption } from '.';
import { id } from "../../types/domain";

export default {
    title: 'Component/DropDownMenu',
} as Meta;

const exampleOptions: IOption[] =[
    {
        id:'1',
        title: "first option",
    },
    {
        id:'2',
        title: "Second option",
    },
    {
        id:'3',
        title: "Third option",
    },
]

const componentDefaultProps: IDropDownMenuProps = {
    title: 'Abonement',
    currentOption: '1',
    onChange: (id:id) => console.log(`change ${id}`),
    options: exampleOptions
}

export const DropDownMenuStory = () => {
    const [currentOption, setCurrentOption] = useState('1');
    const componentProps: IDropDownMenuProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <DropDownMenu {...componentProps}/>
            <DropDownMenu {...componentProps} currentOption='2'/>
            <DropDownMenu {...componentProps} currentOption='3'/>
            <DropDownMenu {...componentProps} currentOption='1562asdv'/>
            <br/>
            <DropDownMenu {...componentProps} currentOption={currentOption} onChange={(id:string)=>setCurrentOption(id)}/>
            <br/>
            <DropDownMenu {...componentProps} title='Loren Ipsumidze' currentOption={currentOption} onChange={(id:string)=>setCurrentOption(id)}/>
        </>
    );
}
