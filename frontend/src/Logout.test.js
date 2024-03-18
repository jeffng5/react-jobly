import React from 'react';
import { render } from '@testing-library/react';
import Logout from './Logout'

it('renders without crashing', function() {
  render(<Logout />);
})

//snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<Logout />);
    expect(asFragment()).toMatchSnapshot();
  });

test('testing component', ()=> {
    const {getByText} = render( <Logout />);
    getByText('out')
})