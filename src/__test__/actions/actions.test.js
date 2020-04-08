import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

//Add To Cart
describe('Actions', () => {
  test('addToCart Action', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
});

//Remove From Cart
describe('Actions', () => {
  test('removeFromCart Action', () => {
    const payload = ProductMock;
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
