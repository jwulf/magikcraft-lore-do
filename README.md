# magikcraft-lore-do

An iterator for Magikcraft.io, the way the Gods intended. Fluent API, with or without delay.

To use:

```
yarn add magikcraft-lore-do
```

In Typescript:

```
import { Do } from 'magikcraft-lore-do'

// Do 10 fireballs with a 0.5 second (500ms) delay between each one.

Do(10).times(magik.infierno).withDelay(500).now();
```

In JavaScript:

```
const Do = require('magikcraft-lore-do');

Do(10).times(magik.infierno).withDelay(500).now();
```

With no delay:

```
const magik = magikcraft.io;

function praise(player) {
    Do(5).times(() => magik.dixit(`${player} is awesome!`)).now();
}
```