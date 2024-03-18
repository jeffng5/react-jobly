import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar'

it('renders without crashing', function() {
  render(<NavBar />);
})

//snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<NavBar />);
    expect(asFragment()).toMatchSnapshot();
  });

test('testing component', ()=> {
    const {getByText} = render( <NavBar />);
    getByText('Jobly')
})