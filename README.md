# JavaScript Function with Silent Null Handling

This repository demonstrates a common subtle bug in JavaScript functions: silent handling of null or undefined values.

The `bug.js` file contains a function that adds two numbers. However, if either input is null, it silently returns 0, potentially hiding errors.

The `bugSolution.js` file provides an improved version that throws an error when encountering null values, improving error handling and making debugging easier.

## Running the Code

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the directory:
   ```bash
   cd <repository_name>
   ```
3. Run the JavaScript files using Node.js:
   ```bash
   node bug.js
   node bugSolution.js
   ```