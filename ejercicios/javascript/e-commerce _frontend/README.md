# Frontend Online Store React Application

A frontend e-commerce web application built with React that allows users to browse products, add them to a shopping cart, and complete purchases.

## Technologies Used

- React.js
- React Router
- Context API for state management
- React Icons
- DummyJSON API for product data

## Features

### Header Component
- Store branding/name
- Shopping cart icon with item counter
- Navigation functionality

### Home Page
- Displays 30 products from DummyJSON API
- Product cards with:
  - Image
  - Title
  - Description
  - Price
  - Add to cart button
  - Share button (Optional feature using Web Share API)

### Shopping Cart
- Shows all added products
- Empty cart message when no items
- Remove items functionality
- Updates cart counter in header
- Checkout button

### Context Management
- BagContext for global cart state
- Tracks added/removed products
- Updates header counter
- Persists cart data

### Confirmation Page
- Order success message
- Clear cart functionality
- Return to shop option


## EXERCISE 8

2. App de tienda: Vamos a crear una versión reducida para una tienda online. Para ello:

Crear un app de react OnlineStore
. La app va a tener común un Header que tenga el nombre de vuestra tienda y en el lado derecho un icono de carrito de la compra con un círculo que indica el número de productos añadido al carrito. De momento dejarlo en cero.

. La app tendrá una página Home que dentro pintará una lista de 30 productos del siguiente API (https://dummyjson.com/products). La card de cada producto la tenéis en la imagen. La funcionalidad de compartir es Opcional, pero si la hacéis debéis utilizar este Web API (https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)

. Cuando se pulse en add to bag se deberá añadir el producto al carrito de la compra y se deberá actualizar el header con el numero de elementos que se han añadido. Para poder hacer esto necesitamos crear un contexto, por ejemplo BagContextque tendrá un array de productos. Las cards añadirán los productos a este context y el header obtendrá del context la cantidad de productos añadidos para poder actualizarlos.

. Crear una página ShoppingBag que deberá mostrar los productos que el usuario tiene añadidos al carrito (como se muestra en la imagen). Esta lista la página la sacará del contexto BagContext.

- Si el carrito está vacío deberá indicar que el carrito se encuentra vacío y sino mostrar la lista de productos.  Se muestra imagen de ejemplo. Podéis usar la imagen de carrito que queráis
- Si el usuario en el carrito elimina productos, se debe actualizar el BagContext  con los productos añadidos o borrados para que siempre se mantenga la info.
- Cuando el usuario le de a pagar, se deberá navegar a una página de confirmación del pago y vaciar el carrito. Esta página la tenemos que crear. Se muestra imagen de ejemplo de esta página




3. Opcional: multi-idioma. Esto lo necesitaréis hacer en vuestro proyecto final, asi que si no da tiempo, lo aprendereis igualmente más adelante. 

- Para ello vamos a utilizar la siguiente librería 
(https://react.i18next.com/).
 Debemos realizar el siguiente tutorial paso a paso y entender como hacer que nuestra app sea multi-idioma https://dev.to/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb