# evaluate
Project #4 for the Udacity Frontend Web Developer nanodegree

## Introduction
A web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites, using the [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis)

NLP is the ability of an application to understand the human language, written or oral.

## Installation
Ensure you have [node](https://nodejs.org/en/) installed on your local device

Get an api key from the [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis) used - this would require creating an account

* Fork the repository to create a version on your account
* Clone the repository 
```
//locally
git clone https://github.com/<Your Github Username>/evaluate.git
```
* Create a `.env` file in the project root and input your API key
```
API_KEY=***...;
```
* Install the node packages
```
npm install
```
* Inspect the `package.json` to see the available scripts
  * To run dev - Runs on `http://localhost:8080/` 
  ```
  npm run build-dev
  ```
  * To run prod - Runs on `http://localhost:8081/`
  ```
  npm run build-prod
  npm start
  ```
  * To run test 
  ```
  npm run test
  ````

## Usage
Put in a valid **news article or blog post URL** and click on the submit button. The result of the analysis will be returned

## License
[MIT](https://choosealicense.com/licenses/mit/)
