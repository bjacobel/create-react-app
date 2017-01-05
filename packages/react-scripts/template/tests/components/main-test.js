import React from 'react';
import { shallow } from 'enzyme';

import { MainComponent } from '../../src/components/Main';

describe('main component', () => {
  describe('un-Connected component', () => {
    it("renders an h3 with data if it didn't hit an error", () => {
      const main = shallow(<MainComponent data={ { text: 'foo' } } getDataAsync={ jest.fn() } />);

      expect(main.find('h3').length).toBe(1);
      expect(main.find('h3').text()).toEqual('foo');
    });

    it('renders no data but an error if data-fetching hits an error', () => {
      const main = shallow(<MainComponent data={ {} } errors={ ['error'] } getDataAsync={ jest.fn() } />);

      expect(main.find('h3').length).toBe(1);
      expect(main.find('h3').text()).toEqual('');
    });

    it('calls getDataAsync on mount', () => {
      const getDataAsync = jest.fn();
      shallow(<MainComponent data={ { text: 'foo' } } getDataAsync={ getDataAsync } />);
      expect(getDataAsync).toHaveBeenCalled();
    });
  });
});
