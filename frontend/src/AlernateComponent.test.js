import React from 'react';
import { render } from '@testing-library/react';
import AlternateComponent from './AlternateComponent'

it('renders without crashing', function() {
  render(<AlternateComponent />);
})

//snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<AlternateComponent />);
    expect(asFragment()).toMatchSnapshot();
  });

test('testing component', ()=> {
    const {getByText} = render( <AlternateComponent />);
    getByText('applied')
})