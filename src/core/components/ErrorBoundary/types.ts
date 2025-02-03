import type { ErrorInfo, ReactNode } from 'react';

export interface IErrorBoundaryState {
  error?: Error;
  errorInfo?: ErrorInfo;
  hasError: boolean;
}

export interface IErrorBoundaryProps {
  children?: ReactNode;
}
