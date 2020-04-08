import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Test Reducers', () => {
  test('Return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('ADD_TO_CART', () => {
    const initialState = { cart: [] };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = { cart: [ProductMock] };
    expect(reducer(initialState, action)).toEqual(expected);
  });
  test('REMOVE_FROM_CART', () => {
    const initialState = { cart: [ProductMock] };
    const action = { type: 'REMOVE_FROM_CART', payload: ProductMock };
    const expected = { cart: [] };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
