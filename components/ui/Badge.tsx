'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', size = 'sm', className }) => {
  const variantStyles = {
    default: 'bg-slate-700 text-slate-100',
    success: 'bg-green-900/50 text-green-200 border border-green-700/50',
    warning: 'bg-yellow-900/50 text-yellow-200 border border-yellow-700/50',
    error: 'bg-red-900/50 text-red-200 border border-red-700/50',
    info: 'bg-blue-900/50 text-blue-200 border border-blue-700/50',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full whitespace-nowrap',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';
