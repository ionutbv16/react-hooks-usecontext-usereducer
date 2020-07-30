import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import BookDetails from '../BookDetails';

describe('Test BookDetails Component', () => {
    it('should render without error', () => {
    const props = {
        title: 'title',
        author: 'Author',
        cover: 'https://lorempixel.com/640/480/?9d8b21dd8f74',
        id: "89cae71c-fbe5-445c-8299-6de7a88ea5ab",
        isbn: "a898978",
    }
    const component = renderer.create(<MemoryRouter><BookDetails {...props} /></MemoryRouter>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
    });
});
