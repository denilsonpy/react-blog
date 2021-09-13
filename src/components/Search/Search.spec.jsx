import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchInput } from '.';

describe('<SearchInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<SearchInput actionFn={fn} searchValue={'testing'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe('testing');
  });

  it('should call hancleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<SearchInput actionFn={fn} searchValue="random value" />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'random value';

    userEvent.type(input, value);

    expect(input.value).toBe('random value');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<SearchInput actionFn={fn} searchValue="" />);

    expect(container).toMatchSnapshot();
  });
});
