import React from 'react';
import { render } from '@testing-library/react';
import CompanyList from './CompanyList'

it('renders without crashing', function() {
  render(<CompanyList />);
})

//snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<CompanyList />);
    expect(asFragment()).toMatchSnapshot();
  });

test('testing component', ()=> {
    const {getByText} = render( <CompanyList />);
    getByText('Search')
})