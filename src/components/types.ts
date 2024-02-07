export type CommonElementProps = Pick<
  React.HTMLAttributes<HTMLElement>,
  "className" | "style" | "children"
>;

export interface IHaveChildren {
  children?: React.ReactNode;
};

export enum ModalMode {
  closed = 'closed',
  fillHeight = 'fillHeight',
  halfHeight = 'halfHeight',
}

export enum SlideoutDirection {
left = 'left',
right = 'right',
top = 'top',
bottom = 'bottom',
}