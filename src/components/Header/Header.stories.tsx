import { Meta } from '@storybook/react';
import { Header, IHeaderProps } from '.';
import { DropDownMenu } from '../DropDownMenu';
import { IconButton } from '../IconButton';
import { ButtonType } from '../IconNavButton';


const meta: Meta<IHeaderProps> = {
    title: 'Component/Header',
    component: Header,
};

export default meta;

const componentDefaultProps: IHeaderProps = {}

export const HeaderStory = () => {
    const componentProps: IHeaderProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <Header {...componentProps}>
                <DropDownMenu options={[]} currentOption='' title='Abonement' onChange={() => console.log('change')}/>
                <IconButton type={ButtonType.notifications} onClick={console.log}/>
            </Header>
        </>
    );
}
