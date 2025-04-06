
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface AlertBannerProps {
  title: string;
  message: React.ReactNode;
  type?: 'info' | 'warning' | 'error' | 'success';
}

const AlertBanner = ({ title, message, type = 'info' }: AlertBannerProps) => {
  const getAlertClasses = () => {
    switch (type) {
      case 'warning':
        return 'bg-gc-yellow border-l-4 border-gc-warning';
      case 'error':
        return 'bg-red-50 border-l-4 border-gc-error';
      case 'success':
        return 'bg-green-50 border-l-4 border-gc-success';
      case 'info':
      default:
        return 'bg-blue-50 border-l-4 border-gc-info';
    }
  };

  return (
    <div className={`p-3 sm:p-4 mb-4 ${getAlertClasses()}`}>
      <div className="flex flex-col sm:flex-row sm:items-start">
        <div className="flex-shrink-0 mb-2 sm:mb-0 sm:mr-3">
          <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-gc-dark-gray" />
        </div>
        <div>
          <h3 className="font-bold text-gc-dark-gray">{title}</h3>
          <div className="mt-1 text-sm text-gc-dark-gray">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;
