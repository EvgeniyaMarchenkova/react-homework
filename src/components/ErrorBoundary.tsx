import React, { ReactNode } from 'react';

interface StateErrorBoundary {
  hasError: boolean;
}

interface PropsErrorBoundary {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<PropsErrorBoundary, StateErrorBoundary> {
  constructor(props: PropsErrorBoundary) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): StateErrorBoundary {
    return { hasError: true };
  }

  componentDidCatch(error: Error): void {
    console.log(error);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>The error occurs. Try again later.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;