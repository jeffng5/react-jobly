import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login'

it('renders without crashing', function() {
  render(<Login />);
})

//snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });

test('testing component', ()=> {
    const {getByText} = render( <Login />);
    getByText('Please')
})