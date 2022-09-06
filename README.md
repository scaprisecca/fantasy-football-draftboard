# Fantasy Football Draftboard

## What I Learned

2022.09.05
- create functions that use the data in the same componet that the data is loaded into (Ex. Data is put in App.js - put the functions that work with the data there)
- you can then pass those functions a props to your other components
- also able to pass all of the data to a component (when doing this, you don't have to use `.map()` to loop over the data)

This is how pass the data to a child component

```js
      <PlayerList players={availablePlayers} draftPlayer={draftPlayer} playerTaken={playerTaken} />
```