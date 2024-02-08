import { Meta } from '@storybook/react';
import { TextButton, ITextButtonProps } from '.';

const meta: Meta<ITextButtonProps> = {
    title: 'Component/TextButton',
    component: TextButton,
};

export default meta;

const componentDefaultProps: ITextButtonProps = {
    title: 'Some title',
    onClick: console.log,
}

export const TextButtonStory = () => {
    const componentProps: ITextButtonProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <TextButton {...componentProps}/>
        </>
    );
}
