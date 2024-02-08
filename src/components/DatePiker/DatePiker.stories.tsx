import React from 'react';
import { Meta } from '@storybook/react';
import { DataPikerType, DatePiker, IDatePikerProps } from '.';

const meta: Meta<IDatePikerProps> = {
    title: 'Component/DatePiker',
    component: DatePiker,
};

export default meta;

const componentDefaultProps: IDatePikerProps = {
    type: DataPikerType.DateTime,
    onChange: console.log
}

export const DatePikerStory = () => {
    const componentProps: IDatePikerProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <DatePiker {...componentProps}/>
            <DatePiker {...componentProps} type={DataPikerType.Time}/>
        </>
    );
}
export const ToggleDatePikerStory = () => {
    const componentProps: IDatePikerProps = {
        ...componentDefaultProps,
    }
    const [value, setValue] = React.useState<Date>(
        new Date('2014-08-18T21:11:54'),
      );
    
      const onChange = (newValue: Date) => {
        setValue(newValue);
      };
    return (
        <>
            <DatePiker {...componentProps} currentDate={value} onChange={()=>onChange}/>
            <DatePiker {...componentProps} type={DataPikerType.Time} currentDate={value} onChange={()=>onChange}/>
            <DatePiker {...componentProps} currentDate={undefined} onChange={()=>onChange} placeHolder='Data&Time'/>
            <DatePiker {...componentProps} type={DataPikerType.Time} currentDate={undefined} onChange={()=>onChange} placeHolder='Time'/>
        </>
    );
}
