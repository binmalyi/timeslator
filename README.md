## Summary
A package to convert a time unit to the other.

## Guide
```js
import { timeslator } from 'timeslator';

timeslator(24, { from: 'h', to: 'm'}) // 1440
```

First parameter is the **time** and Second parameter is the **options**.\n
**options** must either be in plural/short form otherwise an error will be thrown.
```perl
// Correct Syntax ✅
{from: 'ms', to: 's'}
{from: 'milliseconds', to: 'seconds'}
{from: 'milliseconds', to: 's'}

// Incorrect Syntax ❌
{from: 'millisecond', to: 'seconds'} // Error: ⛔ No matches were found!
```

**options** are: <_Milliseconds_>, <_Seconds_>, <_Minutes_> and <_Hours_>\n
`Tip:` they are case-insensitive

## Installation
```bash
npm i timeslator
```

## Support
For any issues that might have arisen, feel free to visit the [support](https://discord.gg/CEQfK869gt) server.