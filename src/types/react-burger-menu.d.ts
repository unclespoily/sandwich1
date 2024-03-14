declare module 'react-burger-menu' {
    import { Component, ReactNode } from 'react';
  
    interface IProps {
      pageWrapId?: string;
      outerContainerId?: string;
      children?: ReactNode;
      styles?: MenuStyles;
    }
  
    export class reveal extends Component<IProps> {}
    // Define other exports as needed
  }