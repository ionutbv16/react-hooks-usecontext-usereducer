import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../Loading';

describe('Test Loading Component', () => {
  it('should render Loading without error', () => {
    const component = renderer.create(<Loading />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});