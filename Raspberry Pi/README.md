This module contains the code that will run in the Raspberry Pi.

### Basic Requirements -

- Raspberry Pi - 4 or higher
- Raspberry Pi camera
- SSH access to the Raspberry Pi (incase not directly connected to the Raspberry Pi)
- minimum 8GB micro sd card

### Installation

Clone this Repository in the Raspberry Pi

```
git clone https://github.com/sagar-io/Mace-Wielders-IOT-Project
```

change the directory and install necessary packages -

```
cd Mace-Wielders-IOT-Project/Raspberry Pi/
npm i
```

run the tensorflow.js model and detect live footage

```
node app.js
```
