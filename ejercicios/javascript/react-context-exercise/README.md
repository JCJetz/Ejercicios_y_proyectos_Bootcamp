# React Context Exercise

## Technical Requirements
- Node.js (v14 or higher)
- React (v18 recommended)
- npm or yarn

## Installation
```bash
git clone <repository-url>
cd react-exercise-7
npm install


### Plan:
1. Improve structure with clear sections
2. Add installation steps
3. Format exercise steps better
4. Add technical requirements
5. Add visual examples
6. Include final result description

```markdown


# React Context Exercise

## Technical Requirements
- Node.js (v14 or higher)
- React (v18 recommended)
- npm or yarn

## Installation
```bash
git clone <repository-url>
cd react-exercise-7
npm install
```

## Exercise: Creating a Counter with Context
This exercise demonstrates React Context usage through a counter application.

### Steps:

1. **Project Setup**
   - Create a new React application

2. **Header Component**
   - Create a Header component with:
     - Height: 40px
     - Black background
     - White text
     - Title display

3. **Counter Component**
   - Create a Counter with:
     - Two buttons (+ and -)
     - Display current count in center
     - Increment/decrement by 1

4. **Context Setup**
   - Create `CounterContext`
   - Initialize `CounterProvider` with value 0
   - Wrap App with provider

5. **Header Enhancement**
   - Add red circle on right side
   - Display counter value inside circle

6. **Counter-Context Integration**
   - Connect Counter to Context
   - Update Context on button clicks
   - Ensure both Header and Counter display same value

## Expected Result
When completed, you'll have:
- A header with counter display
- Interactive counter buttons
- Synchronized state between components using Context

## Visual Structure
```
App
├── CounterProvider
    ├── Header (shows count in circle)
    └── Counter (buttons and count)
```


## EXERCISE
1. Vamos a crear un hello world con el contexto. Para ello:

  - a Crear una app en react
  - b Crear un componente header que tenga un title un alto de 40px y un fondo negro con letras blancas. meter el componente en la app

  - c Crear un componente Counter que tenga dos botones y en el centro un p. 
Los botones son el + y el - que aumentan en 1 el contador. 
El p muestra el valor actual del contador. Meter el componente en la app

  - d Crear un contexto que se llame CounterContext.

  - e Crear el provider de CounterContext e inicializarlo a cero. Utilizar este componente en la app como padre de todos.

  - f Modificar el header para que tenga un círculo con fondo rojo con el valor del CounterContext dentro.Este círculo estará en el lado derecho del header.

  - g Modificar el componente Counter para que actualice el Context cada vez que se actualice el valor del contador. Si todo ha salido bien tanto el p  del Counter como el círculo del header irán actualizando su valor. Acabamos de crear un contexto y comunicar dos elementos de react a través de el


//Para hacer un contador necesito un number, va un (0)


