import { useState } from 'react';
import { Meta } from '@storybook/react';
import { SearchField, ISearchFieldProps } from '.';
import React from 'react';


export default {
    title: 'Component/SearchField',
} as Meta;

const componentDefaultProps: ISearchFieldProps = {
    onChangeSearch: () => console.log('change'),
    onSearch: () => console.log('serch'),
    text: 'John',
}

export const SearchFieldStory = () => {
    const componentProps: ISearchFieldProps = {
        ...componentDefaultProps,
    }
    const [text, setText] = useState('John');
    return (
        <>
            <SearchField {...componentProps}/>
            <br/>
            <SearchField {...componentProps} placeHolder='Search student' text={text} onChangeSearch={(text)=>setText(text)}/>
        </>
    );
}

export const SearchFieldWithSelectStory = () => {
    const componentProps: ISearchFieldProps = {
        ...componentDefaultProps,
        searchOptions: [
            {id: '1', title: 'option 1'},
            {id: '2', title: 'option 2'},
            {id: '3', title: 'option 3'},
        ],
        currentOption: '2',
        onOptionChange: (id) => console.log('change option', id),
    }
    return (
        <>
            <SearchField {...componentProps}/>
        </>
    );
}
