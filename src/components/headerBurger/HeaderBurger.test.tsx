import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeaderBurger, { HeaderLink } from './HeaderBurger';

const links: HeaderLink[] = [
  { label: 'Présentation', href: '#presentation' },
  { label: 'Nos sportifs', href: '#sportifs' },
];

const languages = ['fr', 'en'];

describe('HeaderBurger', () => {
  beforeEach(() => {
    render(<HeaderBurger links={links} languages={languages} />);
  });

  it('should render the burger icon', () => {
    expect(screen.getByLabelText(/toggle menu/i)).toBeInTheDocument();
  });

  it('should open the menu on click', () => {
    fireEvent.click(screen.getByLabelText(/toggle menu/i));
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument();
    expect(screen.getByText(/présentation/i)).toBeInTheDocument();
    expect(screen.getByText(/nos sportifs/i)).toBeInTheDocument();
  });

  it('should close the menu when clicking the close button', () => {
    fireEvent.click(screen.getByLabelText(/toggle menu/i));
    fireEvent.click(screen.getByLabelText(/close menu/i));
  
    // check class removal
    expect(document.querySelector('.burger-menu')).not.toHaveClass('open');
});
  

    it('should render language buttons', () => {
        fireEvent.click(screen.getByLabelText(/toggle menu/i));
        expect(screen.getByRole('button', { name: /switch to fr/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /switch to en/i })).toBeInTheDocument();
      });
      

      it('should close the menu when clicking outside', () => {
        fireEvent.click(screen.getByLabelText(/toggle menu/i));
        const overlay = document.querySelector('.burger-menu-overlay');
        fireEvent.mouseDown(overlay as HTMLElement);
      
        expect(document.querySelector('.burger-menu')).not.toHaveClass('open');
    });
});
