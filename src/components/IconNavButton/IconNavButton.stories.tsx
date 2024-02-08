import { Meta } from '@storybook/react';
import { activeAvatarStyle, AppAvatar, IconNavButton, IIconNavButtonProps, ButtonType } from '.';

const meta: Meta<IIconNavButtonProps> = {
    title: 'Component/IconNavButton',
    component: IconNavButton,
};

export default meta;

const componentDefaultProps: IIconNavButtonProps = {
    isActive: false,
    onClick: ()=> console.log("click"),
    type: ButtonType.avatar,
}

export const IconNavButtonStory = () => {
    const componentProps: IIconNavButtonProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <IconNavButton {...componentProps} isActive/>
            <IconNavButton {...componentProps} isActive type={ButtonType.abonements} title="Abonements"/>
            <IconNavButton {...componentProps} isActive type={ButtonType.accepted} title="Accepted"/>
            <IconNavButton {...componentProps} isActive type={ButtonType.cancel} title="Cancel"/>
            <IconNavButton {...componentProps} isActive type={ButtonType.confirm} title="Confirm"/>
            <IconNavButton {...componentProps} isActive type={ButtonType.declained} title="Declained"/>
            <IconNavButton {...componentProps} isActive type={ButtonType.more} title="More"/>
            <IconNavButton {...componentProps} isActive type={ButtonType.pending} title="Pending"/>
            <IconNavButton {...componentProps} isActive type={ButtonType.schedule} title="Schedule"/>
            <IconNavButton {...componentProps} isActive type={ButtonType.subjects} title="Subjects"/>
            <IconNavButton {...componentProps} isActive type={ButtonType.notifications} title="Notifications"/>
            <IconNavButton {...componentProps}/>
            <IconNavButton {...componentProps} type={ButtonType.abonements} title="Abonements"/>
            <IconNavButton {...componentProps} type={ButtonType.accepted} title="Accepted"/>
            <IconNavButton {...componentProps} type={ButtonType.cancel} title="Cancel"/>
            <IconNavButton {...componentProps} type={ButtonType.confirm} title="Confirm"/>
            <IconNavButton {...componentProps} type={ButtonType.declained} title="Declained"/>
            <IconNavButton {...componentProps} type={ButtonType.more} title="More"/>
            <IconNavButton {...componentProps} type={ButtonType.pending} title="Pending"/>
            <IconNavButton {...componentProps} type={ButtonType.schedule} title="Schedule"/>
            <IconNavButton {...componentProps} type={ButtonType.subjects} title="Subjects"/>
            <IconNavButton {...componentProps} type={ButtonType.notifications} title="Notifications"/>
        </>
    );
}

export const AppAvatarStory = () => {
    const componentProps: IIconNavButtonProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <AppAvatar/>
            <AppAvatar style={activeAvatarStyle}/>
        </>
    );
}

export const IconNavButtonNoTitleStory = () => {
    const componentProps: IIconNavButtonProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <IconNavButton {...componentProps} isActive/>
            <IconNavButton {...componentProps} isActive type={ButtonType.abonements}/>
            <IconNavButton {...componentProps} isActive type={ButtonType.accepted}/>
            <IconNavButton {...componentProps} isActive type={ButtonType.cancel}/>
            <IconNavButton {...componentProps} isActive type={ButtonType.confirm}/>
            <IconNavButton {...componentProps} isActive type={ButtonType.declained}/>
            <IconNavButton {...componentProps} isActive type={ButtonType.more}/>
            <IconNavButton {...componentProps} isActive type={ButtonType.pending}/>
            <IconNavButton {...componentProps} isActive type={ButtonType.schedule}/>
            <IconNavButton {...componentProps} isActive type={ButtonType.subjects}/>
            <IconNavButton {...componentProps} isActive type={ButtonType.notifications}/>
            <IconNavButton {...componentProps}/>
            <IconNavButton {...componentProps} type={ButtonType.abonements}/>
            <IconNavButton {...componentProps} type={ButtonType.accepted}/>
            <IconNavButton {...componentProps} type={ButtonType.cancel}/>
            <IconNavButton {...componentProps} type={ButtonType.confirm}/>
            <IconNavButton {...componentProps} type={ButtonType.declained}/>
            <IconNavButton {...componentProps} type={ButtonType.more}/>
            <IconNavButton {...componentProps} type={ButtonType.pending}/>
            <IconNavButton {...componentProps} type={ButtonType.schedule}/>
            <IconNavButton {...componentProps} type={ButtonType.subjects}/>
            <IconNavButton {...componentProps} type={ButtonType.notifications}/>
        </>
    );
}