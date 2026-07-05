import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../components/Hero';

describe('Hero Component', () => {
  it('renders correctly', () => {
    render(<Hero theme="dark" onExploreClick={() => {}} onShopClick={() => {}} />);
    expect(screen.getByText(/DANIEL/i)).toBeDefined();
  });
});
