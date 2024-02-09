import React from 'react';
import { CommonElementProps } from '../types';
export interface IIconNavButtonProps extends CommonElementProps {
    type: ButtonType;
    isActive?: boolean;
    image?: string;
    onClick: () => void;
    title?: string;
}
export declare enum ButtonType {
    schedule = "schedule",
    avatar = "avatar",
    subjects = "subjects",
    abonements = "abonements",
    accepted = "accepted",
    pending = "pending",
    declained = "declained",
    cancel = "cancel",
    confirm = "confirm",
    more = "more",
    notifications = "notifications",
    search = "search",
    info = "info",
    arrowBack = "arrowBack"
}
export interface IAppAvatarProps extends CommonElementProps {
    image?: string;
}
export declare const AppAvatar: React.FC<IAppAvatarProps>;
export declare const IconVariant: {
    schedule: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    avatar: React.FC<IAppAvatarProps>;
    subjects: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    abonements: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    accepted: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    pending: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    declained: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    cancel: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    confirm: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    more: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    notifications: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    search: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    info: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    arrowBack: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
};
export declare const activeAvatarStyle: {
    border: string;
};
declare const IconNavButton: React.FC<IIconNavButtonProps>;
export default IconNavButton;
