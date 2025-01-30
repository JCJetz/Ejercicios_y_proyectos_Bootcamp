### Template Literals

Template literals are like regular strings with super-powers:

```js
const greeting = 'Hello'
const subject = 'World'
console.log(`${greeting} ${subject}!`) // Hello World!
```

```js
// this is the same as:
console.log(greeting + ' ' + subject + '!')

// in React:
function Box({className, ...props}) {
  return <div className={`box ${className}`} {...props} />
}
```

⭐ MDN: Template Literals
[Ref] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)


## Shorthand property names
This is so common and useful that I do this without thinking now.

```js
const a = 'hello'
const b = 42
const c = {d: [true, false]}
console.log({a, b, c})

// this is the same as:
console.log({a: a, b: b, c: c})

// in React:
function Counter({initialCount, step}) {
  const [count, setCount] = useCounter({initialCount, step})
  return <button onClick={setCount}>{count}</button>
}
```
⭐ MDN: Object initializer New notations in ECMAScript 2015
[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#new_notations_in_ecmascript_2015)

## Arrow functions
Arrow functions are another way to write functions in JavaScript, but they do have a few semantic differences. Luckily for us in React land, we don't have to worry about this as much if we're using hooks in our project (rather than classes), but the arrow function allows for terser anonymous functions and implicit returns, so you'll see and want to use arrow functions plenty.
```js
const getFive = () => 5
const addFive = a => a + 5
const divide = (a, b) => a / b

// this is the same as:
function getFive() {
  return 5
}
function addFive(a) {
  return a + 5
}
function divide(a, b) {
  return a / b
}

// in React:
function TeddyBearList({teddyBears}) {
  return (
    <ul>
      {teddyBears.map(teddyBear => (
        <li key={teddyBear.id}>
          <span>{teddyBear.name}</span>
        </li>
      ))}
    </ul>
  )
}
```
One thing to note about the example above is the opening and closing parentheses `(` This is a common way to leverage the arrow function's implicit return capabilities when working with JSX.

⭐ MDN: Arrow Functions
[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)




## Destructuring
Destructuring is probably my favorite JavaScript feature. I destructure objects and arrays all the time (and if you're using useState you probably are too, like so). I love how declarative it is.
```js
// const obj = {x: 3.6, y: 7.8}
// makeCalculation(obj)

function makeCalculation({x, y: d, z = 4}) {
  return Math.floor((x + d + z) / 3)
}

// this is the same as
function makeCalculation(obj) {
  const {x, y: d, z = 4} = obj
  return Math.floor((x + d + z) / 3)
}

// which is the same as
function makeCalculation(obj) {
  const x = obj.x
  const d = obj.y
  const z = obj.z === undefined ? 4 : obj.z
  return Math.floor((x + d + z) / 3)
}

// in React:
function UserGitHubImg({username = 'ghost', ...props}) {
  return <img src={`https://github.com/${username}.png`} {...props} />
}
```
⭐ MDN: Destructuring assignment
[Ref] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```js
function nestedArrayAndObject() {
  // refactor this to a single line of destructuring...
  const info = {
    title: 'Once Upon a Time',
    protagonist: {
      name: 'Emma Swan',
      enemies: [
        {name: 'Regina Mills', title: 'Evil Queen'},
        {name: 'Cora Mills', title: 'Queen of Hearts'},
        {name: 'Peter Pan', title: `The boy who wouldn't grow up`},
        {name: 'Zelena', title: 'The Wicked Witch'},
      ],
    },
  }
  // const {} = info // <-- replace the next few `const` lines with this
  const title = info.title
  const protagonistName = info.protagonist.name
  const enemy = info.protagonist.enemies[3]
  const enemyTitle = enemy.title
  const enemyName = enemy.name
  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
}
```



## Parameter defaults
This is another feature I use all the time. It's a really powerful way to declaratively express default values for your functions.
```js
// add(1)
// add(1, 2)
function add(a, b = 0) {
  return a + b
}

// is the same as
const add = (a, b = 0) => a + b

// is the same as
function add(a, b) {
  b = b === undefined ? 0 : b
  return a + b
}

// in React:
function useLocalStorageState({
  key,
  initialValue,
  serialize = v => v,
  deserialize = v => v,
}) {
  const [state, setState] = React.useState(
    () => deserialize(window.localStorage.getItem(key)) || initialValue,
  )

  const serializedState = serialize(state)
  React.useEffect(() => {
    window.localStorage.setItem(key, serializedState)
  }, [key, serializedState])

  return [state, setState]
}
```
⭐  MDN: Default parameters
[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)



## Rest/Spread

The ... syntax can be thought of as kind of a "collection" syntax where it operates on a collection of values. I use it all the time and strongly recommend you learn how and where it can be used as well. It actually takes different meanings in different contexts, so learning the nuances there will help you.
```js
const arr = [5, 6, 8, 4, 9]
Math.max(...arr)
// is the same as
Math.max.apply(null, arr)

const obj1 = {
  a: 'a from obj1',
  b: 'b from obj1',
  c: 'c from obj1',
  d: {
    e: 'e from obj1',
    f: 'f from obj1',
  },
}
const obj2 = {
  b: 'b from obj2',
  c: 'c from obj2',
  d: {
    g: 'g from obj2',
    h: 'g from obj2',
  },
}
console.log({...obj1, ...obj2})
// is the same as
console.log(Object.assign({}, obj1, obj2))

function add(first, ...rest) {
  return rest.reduce((sum, next) => sum + next, first)
}
// is the same as
function add() {
  const first = arguments[0]
  const rest = Array.from(arguments).slice(1)
  return rest.reduce((sum, next) => sum + next, first)
}

// in React:
function Box({className, ...restOfTheProps}) {
  const defaultProps = {
    className: `box ${className}`,
    children: 'Empty box',
  }
  return <div {...defaultProps} {...restOfTheProps} />
}

```
⭐ MDN: Spread syntax
[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

⭐ MDN: Rest parameters
[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)



## Ternaries
I love ternaries. They're beautifully declarative. Especially in JSX.
```js
const message = bottle.fullOfSoda
  ? 'The bottle has soda!'
  : 'The bottle may not have soda :-('

// is the same as
let message
if (bottle.fullOfSoda) {
  message = 'The bottle has soda!'
} else {
  message = 'The bottle may not have soda :-('
}

// in React:
function TeddyBearList({teddyBears}) {
  return (
    <React.Fragment>
      {teddyBears.length ? (
        <ul>
          {teddyBears.map(teddyBear => (
            <li key={teddyBear.id}>
              <span>{teddyBear.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>There are no teddy bears. The sadness.</div>
      )}
    </React.Fragment>
  )
}
```
I realize that ternaries can get a knee-jerk reaction of disgust from some people who had to endure trying to make sense of ternaries before prettier came along and cleaned up our code. If you're not using prettier.io already, I strongly advise that you do. Prettier will make your ternaries much easier to read.

MDN: Conditional (ternary) operator
[Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
