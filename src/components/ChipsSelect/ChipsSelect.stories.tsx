import { useState } from 'react';
import { Meta } from '@storybook/react';
import { ChipsSelect, ISelectOption, IChipsSelectProps } from '.';
import { toggleStringArrayValue } from '../../utilities/toggleArrayValue';
import React from 'react';

const meta: Meta<IChipsSelectProps> = {
    title: 'Component/ChipsSelect',
    component: ChipsSelect,
};

export default meta;

const componentDefaultProps: IChipsSelectProps = {
    options: [],
    selected: [],
    onChange: (id) => console.log(`click to ${id}`)
}

const dummieChipsSelectOptions : ISelectOption[] = [
    {
        id: '1',
        title: 'Tatva Yoga'
    },
    {
        id: '2',
        title: 'Tratatata Yoga'
    },
    {
        id: '3',
        title: 'Taratata Yoga'
    },
    {
        id: '4',
        title: 'Atata Yoga'
    },
    {
        id: '5',
        title: 'Hatatata Yoga'
    },
]

export const ChipsSelectStory = () => {
    const componentProps: IChipsSelectProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <ChipsSelect {...componentProps}/>
            <ChipsSelect {...componentProps} options={dummieChipsSelectOptions}/>
            <ChipsSelect {...componentProps} options={dummieChipsSelectOptions} selected={['1', '3', '12', '5']}/>
        </>
    );
}
export const ToggleChipsSelectStory = () => {
    const componentProps: IChipsSelectProps = {
        ...componentDefaultProps,
    }
    const [selected, setSelected] = useState<string[]>([]);
    const changeSelected = (id: string) => {
        const result = toggleStringArrayValue(selected, id);
        setSelected(result);
    }
    return (
        <>
          <ChipsSelect {...componentProps} options={dummieChipsSelectOptions} selected={selected} onChange={changeSelected}/>
        </>
    );
}
