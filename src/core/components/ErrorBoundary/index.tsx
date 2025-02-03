import React from 'react';
import type { ErrorInfo, ReactNode } from 'react';

import { IErrorBoundaryProps, IErrorBoundaryState } from './types';

export default class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  public state: IErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error(
      '%c UNCAUGHT ERROR:',
      'padding: 0.4rem 3.2rem; background: crimson; font: 0.8rem/1 Arial; color: white;',
      error,
      errorInfo,
    );

    this.setState((prevState) => ({ ...prevState, error, errorInfo }));
  }

  public render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <h2>Что-то пошло не так.</h2>
      );
    }

    return children;
  }
}
