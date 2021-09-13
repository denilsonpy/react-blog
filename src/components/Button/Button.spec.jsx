import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './index';

describe('<Button />', () => {
  it('Should render the button with the text "Load more"', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onCLick={fn} disabled={false} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument('class', 'button');
  });

  it('Should call function on the button click', () => {
    const fn = jest.fn();
    render(<Button text="Load More Post" onCLick={fn} disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('Should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load More Post" onCLick={fn} disabled={true} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('Should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load More Post" onCLick={fn} disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it('Should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load More Post" onCLick={fn} disabled={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
