import React from 'react';
import { render } from '@testing-library/react';
import AbridgedNavBar from './AbridgedNavBar'

it('renders without crashing', function() {
  render(<AbridgedNavBar />);
})

//snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<AbridgedNavBar />);
    expect(asFragment()).toMatchSnapshot();
  });

// test('testing component', ()=> {
//     const {getByText} = render(<AbridgedNavBar />);
//     getByText('Login')
// })