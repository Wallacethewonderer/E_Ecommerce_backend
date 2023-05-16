# E_Ecommerce_backend

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses)

## Description

An Express.js API which use Sequelize to interact with a MySQL database.

## Table of Contents

- [Installation](##installation)
- [Usage](##usage)
- [Contributing](##contributing)
- [Tests](##tests)
- [License](##license)
- [Questions](##questions)
- [Link to the video](##link-to-the-video)

## Installation

npm i express sequelize dotenv

## Usage

1. Clone the repo.
2. Create a .env file in the root directory of the project.
3. Add the following to the .env file, replacing the values with your own:
   DB_NAME=ecommerce_db
   DB_USER=your-mysql-username
   DB_PW=your-mysql-password
4. Open MySQL shell and run the following:
   DROP DATABASE IF EXISTS ecommerce_db;
   CREATE DATABASE ecommerce_db;
   USE ecommerce_db;
5. Run node seeds/index.js to seed the database.
6. Run node server.js to start the server.
7. Use Insomnia to test the routes.


## Contributing

OPEN-SOURCE

## Tests

N/A

## License

This project is licensed under the MIT license. Click the badge at the top of the README to learn more about the license terms and conditions.

## Questions

If you have any questions about this project, please contact me via:

- Email: yuhe.liang@outlook.com
- GitHub: https://github.com/Wallacethewonderer

## Link to the video

[Link to the video](https://drive.google.com/file/d/1c4o_jqYWq7W2g0Z_0AktQP0QHVZxEjj2/view)
