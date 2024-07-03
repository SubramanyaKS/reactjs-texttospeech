# reactjs-texttospeech

`reactjs-texttospeech` is a lightweight React hook for converting text to speech using the Web Speech API. This hook allows developers to easily add text-to-speech capabilities to their React applications.

## Features

- Simple and easy-to-use API.
- Support play,pause and stop function.
- Customize pitch and rate.

## Installation

To install the package, use npm or yarn:

```bash

npm install reactjs-texttospeech

```
or
```bash

yarn add reactjs-texttospeech
```

## Usage

Here's a quick example of how to use the useSpeeched hook in your React component:

```js
import React, { useState } from 'react';
import { useSpeeched } from './useSpeeched';

const TextToSpeechComponent = () => {
    const [text, setText] = useState("Hello, this is a test");
    const [rate, setRate] = useState(1);
    const [pitch, setPitch] = useState(1);
    const { handlePlay, handlePause, handleStop, isPaused } = useSpeeched(text, rate, pitch);

    return (
        <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <div>
                <label>Rate:
                    <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} min="0.1" max="2" step="0.1" />
                </label>
            </div>
            <div>
                <label>Pitch:
                    <input type="number" value={pitch} onChange={(e) => setPitch(Number(e.target.value))} min="0" max="2" step="0.1" />
                </label>
            </div>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>{isPaused ? 'Resume' : 'Pause'}</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default TextToSpeechComponent;
```


## Development
If you want to contribute or modify the package, clone the repository and install the dependencies:

```bash
git clone https://github.com/SubramanyaKS/reactjs-texttospeech.git
cd reactjs-texttospeech
npm install
```

To build the package, run:

```bash
npm run build
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
* Inspired by the simplicity of the Web Speech API.
* Thanks to all contributors and the open-source community for making this possible.

