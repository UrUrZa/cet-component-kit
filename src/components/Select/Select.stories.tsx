import React from 'react';
import { Meta } from '@storybook/react';
import { Select, ISelectProps } from '.';
import { id } from '../../../common/types/domain';

export default {
    title: 'Component/Select',
} as Meta;

const componentDefaultProps: ISelectProps = {
    selected: '',
    options: [],
    onChange: console.log
}

export const SelectEmptyStory = () => {
    const componentProps: ISelectProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <Select {...componentProps}/>
        </>
    );
}
export const SelectToggleStory = () => {
    const componentProps: ISelectProps = {
        ...componentDefaultProps,
    }
    const [selected, setSelected] = React.useState('');

    const handleChange = (id:id) => {
        setSelected(id);
    };
    return (
        <>
            <Select 
                {...componentProps}
                selected={selected}
                onChange={handleChange}
                options={[
                    {id: '1', title: 'Option 1'},
                    {id: '2', title: 'Option 2'},
                ]}
            />
        </>
    );
}
