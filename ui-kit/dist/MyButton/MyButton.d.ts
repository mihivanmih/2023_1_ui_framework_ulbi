import React, { FC } from 'react';
import './MyButton.css';
export interface MyButtonProps {
    color: string;
    children: React.ReactNode;
    big?: boolean;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
