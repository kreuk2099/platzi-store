// Probar String
describe('Suite -> Funciones Básicas para Unit Testing', () => {
  //Probar textos
  const text = 'Hola Mundo';
  test('Debe contener Mundo', () => {
    expect(text).toMatch(/Mundo/);
  });

  // Probar Array
  const fruits = ['manzana', 'mango', 'uvas'];
  test('¿Tenemos mango?', () => {
    expect(fruits).toContain('mango');
  });

  // Probar números
  test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
  });

  // Probar booleano
  test('Verdadero', () => {
    expect(true).toBeTruthy();
  });

  // Probar callback
  const reverseString = (str, callback) => {
    callback(
      str.split('').reverse().join('')
    );
  };
  test('Probar un callback', () => {
    reverseString('hola', (str) => {
      expect(str).toBe('aloh');
    });
  });

  // Probando promesas
  const reverseString2 = (str) => {
    return new Promise((resolve, reject) => {
      if (!str || str === '') {
        reject(new Error('no existe el texto'));
      } else {
        resolve(str.split('').reverse().join(''));
      }
    });
  };
  test('probando promesas', () => {
    return reverseString2('Hola')
      .then((string) => {
        expect(string).toBe('aloH');
    });
  });

  // // Probando promesa await
  // test('Probar async/await', async () => {
  //   const string = await reverseString2('hola');
  //   expect(string).toBe('aloh');
  // });
});
