import React from 'react';
import { render } from '@testing-library/react';
import CompanySearch from './CompanySearch'

it('renders without crashing', function() {
  render(<CompanySearch />);
})

//snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<CompanySearch />);
    expect(asFragment()).toMatchSnapshot();
  });

test('testing component', ()=> {
    const {getByText} = render( <CompanySearch />);
    getByText('Search')
})