import React from 'react';
import { render } from '@testing-library/react';
import CompanyDetail from './Company-Detail'

it('renders without crashing', function() {
  render(<CompanyDetail />);
})

//snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<CompanyDetail />);
    expect(asFragment()).toMatchSnapshot();
  });

test('testing component', ()=> {
    const {getByText} = render( <CompanyDetail />);
    getByText('Salary')
})