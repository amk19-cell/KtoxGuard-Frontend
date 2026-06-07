import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="bg-card rounded-lg p-6 max-w-md">
            <h2 className="text-xl font-bold text-danger mb-2">Une erreur est survenue</h2>
            <p className="text-textSecondary mb-4">L'application a rencontré un problème. Veuillez rafraîchir la page.</p>
            <button onClick={() => window.location.reload()} className="bg-primary px-4 py-2 rounded text-white">Rafraîchir</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
