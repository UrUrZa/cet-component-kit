import React, { useState } from 'react';
import { WeekDayPiker, IWeekDayPikerProps } from '.';
import { Meta } from '@storybook/react';
import { toggleArrayValue } from '../../commands/toggleArrayValue';

export default {
    title: 'Component/WeekDayPiker',
} as Meta;

const componentDefaultProps: IWeekDayPikerProps = {
    checked: [],
    onChange: (day:number)=> console.log(`ckick ${day}`),
}

export const WeekDayPikerStory = () => {
    const componentProps: IWeekDayPikerProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <WeekDayPiker {...componentProps}/>
            <br/>
            <WeekDayPiker {...componentProps} checked={[1, 3, 5, 6]}/>
        </>
    );
}

export const ToggleWeekDayPikerStory = () => {
    const componentProps: IWeekDayPikerProps = {
        ...componentDefaultProps,
    }
    const [checked, setChecked] = useState([1]);
    const changeChecked = (number: number) => {
        const result = toggleArrayValue(checked, number);
        setChecked(result);
    }
    return (
        <>
            <WeekDayPiker {...componentProps} checked={checked} onChange={changeChecked} />
        </>
    );
}
