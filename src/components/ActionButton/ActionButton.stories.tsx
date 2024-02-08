import { Meta } from '@storybook/react';
import { ActionButton, IActionButtonProps } from '.';

const meta: Meta<IActionButtonProps> = {
    title: 'Component/ActionButton',
    component: ActionButton,
};

export default meta;

const componentDefaultProps: IActionButtonProps = {
    onClick: () => console.log("Add Item")
}

export const ActionButtonStory = () => {
    const componentProps: IActionButtonProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <ActionButton {...componentProps}/>
        </>
    );
}
