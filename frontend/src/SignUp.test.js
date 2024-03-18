import React from 'react';
import { render } from '@testing-library/react';
import SignUp from './SignUp'

it('renders without crashing', function() {
  render(<SignUp />);
})

//snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<SignUp />);
    expect(asFragment()).toMatchSnapshot();
  });

test('testing component', ()=> {
    const {getByText} = render( <SignUp />);
    getByText('Please')
})