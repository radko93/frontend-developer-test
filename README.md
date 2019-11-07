I finally completed my test! I didn't have much time so in the end, I did not finish everything I planned. Rules were flexible so I decided to focus more on project architecture than its design.

I did not enjoy doing this exercise, I was quite anxious while reading:

> come up with a solution that will impress us

I feel like it's expected to build something extraordinary inside a regular coding exercise that should take a couple of hours (it took me longer than that :(). Maybe someone else did it, but I did not have time nor ideas to accomplish anything similar. I just concentrated on building something solid.

But I felt motived because of how exciting the role sounds. I broke the main rule which is to make a design-driven app. I’m a bit experienced in UX, but I don’t feel very confident designing user interfaces myself (as I never really had to do it), that’s why I focused on the part I’m stronger at - coding. Unfortunately, the app does not look great.

### Architecture:
- store - divided into modules, each one of them includes actions, reducer, sagas, models and selectors
- components - reusable components
services - the only API in there right now, other services like file upload/download could be added there
- constants
- utils - include helpers to make UI responsive on different devices
- translations
- screens - components connected to the redux store

Besides that, the project included navigation setup file and config file.

### Tech:
- `typescript` - I had a talk about typescript in React Native just two months ago if you would like to to have a look https://www.youtube.com/watch?v=U3OE1uTIN3Q&t=2s
- `typesafe-actions` - a great library that helps in using TS with Redux actions and reducers (it also supports regular redux reducers syntax, not only the one I used in the app)
- `jest` - unit tests and snapshots using `react-native-testing-library`
- `redux` - definitely overkill for a small app like this, but I wanted to showcase how I use redux
- `redux-saga` - currently my favourite to handle asynchronous things. Easy to accomplish complex things in a clear and declarative way. Quite easy to test them.
- `reselect` - IMO a must-have for any redux app - memoize your selectors’ response so your app runs faster
- `typescript-eslint` - TSlist and Eslint in one, help with using and learning Typescript
- `styled-components` - a great way to keep styles clean and reusable. Also, a must-have if someone has not another clean solution to handle this
- `react-navigation` - standard option for navigation in react native. Exciting times coming as it’s going to get even better in the next version.
- `react-native-snap-carousel` and `react-native-pan-zoom` to build the image preview (to open click on avatar, to close swipe down)

I did not add as many tests as I wanted, unfortunately. I also missed the ability to skip a user. On the other hand, I tried to handle things like fetch failure. In the end, I’m quite happy with the final effect, as that is more or less how I would set up a new project right now.

Link to the app on expo: https://exp.host/@radko93/feeldradek (I tested mostly on iOS).

All the best,
Radek
