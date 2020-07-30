import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import BookItem from '../BookItem';

describe('Test BookItem Component', () => {
    it('should render without error', () => {
    const props = {
        title: 'title',
        author: 'Author',
        cover: 'https://lorempixel.com/640/480/?9d8b21dd8f74',
        id: "89cae71c-fbe5-445c-8299-6de7a88ea5ab",
    }
    const component = renderer.create(<MemoryRouter><BookItem {...props} /></MemoryRouter>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    });
});
