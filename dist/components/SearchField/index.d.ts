import React from 'react';
import { IOption } from '../DropDownMenu';
import { id } from '../../types/domain';
interface ISelectSearchProps {
    searchOptions?: IOption[];
    currentOption?: id;
    onOptionChange?: (id: id) => void;
}
export interface ISearchFieldProps extends ISelectSearchProps, React.HTMLAttributes<HTMLInputElement> {
    text: string;
    onChangeSearch: (text: string) => void;
    onSearch: () => any;
    placeHolder?: string;
}
declare const SearchField: React.FC<ISearchFieldProps>;
export default SearchField;
