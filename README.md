# Colorful Nonogram Solver

A software solution for converting images into solvable nonograms, preferably without trial-and-error, as well as solving nonograms.
It has been done in the terms of black and white nonograms, but research (opening 5 first google results) has shown no solutions capable of solving and creating coloured nonograms.\
The project consists of three parts:
* python webserver for solving nonograms
* js/svelte frontend for displaying algorithm steps, also functioning as user app for solving the nonograms by hand
* (optional) python utility for image-to-nonogram conversion

## Getting Started

Run `npm i` once.\
Run `npm run dev` to serve the webapp\

If backend is not working, be sure to run the flask server locally and change the url in webapp.\
Just run `python app.py`

### Prerequisites

#### Node.js
Go to [Node.js](https://nodejs.org/en), install the latest version, everything as default\

#### Python
Go to [Python.org](https://www.python.org/downloads/), install the latest version, then `pip install` necessary packages.\
Be sure to set the virtual environment correctly and activate flask powershell script (on the older versions). 

## Tests

N/A (yet)

## Built With

* [Svelte](https://svelte.dev/) - Web framework
* [Flask](https://flask.palletsprojects.com/en/3.0.x/) - Server framework
* [Vite](https://vitejs.dev/) - Typescript packager

## Versioning

We will probably, in the future, use [SemVer](http://semver.org/) for versioning (if ever).

## Authors

* **Mateusz Francik** - *Idea, initial work* - [Frendzlu](https://github.com/Frendzlu)
* **Jagoda Flejmer** - *Initial work, management* - [jFlamer](https://github.com/jFlamer)
* **Jakub Kierznowski** - *Initial work, frontend* - [qualv13](https://github.com/qualv13)
* **Katarzyna Wilk** - *Initial work, algorithm consultations* - [katwilk7](https://github.com/katwilk7)

## License

This project's frontend is licensed under the MIT License - see the [LICENSE.md](https://github.com/AGH-Narzedzia-Informatyczne-2023-2024/nonogram-solver-webapp/blob/main/LICENSE) file for details
This project's backend is licensed under the AGPL-3.0 License - see the [LICENSE.md](https://github.com/AGH-Narzedzia-Informatyczne-2023-2024/nonogram-solver-backend/blob/main/LICENSE) file for details

## Acknowledgments

* Paweł Jemioło, for making us do this project.
