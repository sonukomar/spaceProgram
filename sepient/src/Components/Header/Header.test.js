import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
     render(<Header headertext={'SpaceX Launch Programs'}/>);
     expect(screen.getByText('SpaceX Launch Programs')).toBeInTheDocument();
   
  });