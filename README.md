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
* Input the api key on the first line in the `website/app.js` file
```
const apiKey = '***...';
```
* Install the node packages
```
npm install
npm start
```
* Open your local browser and verify the weather-journal-app is working by accessing
```
http://localhost:8000/
```

## Usage
Put in values in the input fields and click the generate button. The date, your location, the temperature, what the day actually feels like :) and your feelings are returned.

## License
[MIT](https://choosealicense.com/licenses/mit/)
