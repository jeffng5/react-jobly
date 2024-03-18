import React from 'react';
import { render } from '@testing-library/react';
import Homepage from './Homepage'

it('renders without crashing', function() {
  render(<Homepage />);
})

//snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<Homepage />);
    expect(asFragment()).toMatchSnapshot();
  });

test('testing component', ()=> {
    const {getByText} = render( <Homepage />);
    getByText('Welcome')
})