'use client';

import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = 'xl', className, ...props }, ref) => {
    const sizeStyles = {
      sm: 'max-w-2xl',
      md: 'max-w-3xl',
      lg: 'max-w-4xl',
      xl: 'max-w-6xl',
      '2xl': 'max-w-7xl',
    };

    return (
      <div
        ref={ref}
        className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizeStyles[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id?: string;
  noGutter?: boolean;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ children, id, noGutter = false, className, ...props }, ref) => (
    <section
      ref={ref}
      id={id}
      className={cn(!noGutter && 'py-20 md:py-32', 'scroll-mt-24', className)}
      {...props}
    >
      {children}
    </section>
  )
);

Section.displayName = 'Section';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: 'sm' | 'md' | 'lg';
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ children, cols = 3, gap = 'md', className, ...props }, ref) => {
    const colStyles = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    };

    const gapStyles = {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
    };

    return (
      <div
        ref={ref}
        className={cn('grid', colStyles[cols], gapStyles[gap], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  direction?: 'row' | 'col';
  gap?: 'sm' | 'md' | 'lg';
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      align = 'start',
      justify = 'start',
      direction = 'row',
      gap = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const alignStyles = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    };

    const justifyStyles = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    };

    const directionStyles = {
      row: 'flex-row',
      col: 'flex-col',
    };

    const gapStyles = {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          alignStyles[align],
          justifyStyles[justify],
          directionStyles[direction],
          gapStyles[gap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';
