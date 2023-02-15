<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


# Working of the Code 
1. For listing of all the files, just write this in POST request 

![image](https://user-images.githubusercontent.com/122452288/218996409-75f23ef1-2cec-46b4-bd24-759625e867d5.png)

Our O/P will be like above, if we specify the "id" of our folder as input to our POST request in the form of json like this, then it will show all the file of that particular folder .

![image](https://user-images.githubusercontent.com/122452288/218997081-bd31724f-17c8-49bc-8818-21ad2a205429.png)

!! we got the ID of folder or any file using the search POST request like this, so we can use that anywhere.

2. Using the search, by giving the file_name in POST request in the form of json like this

![image](https://user-images.githubusercontent.com/122452288/218997564-5fc6e5a8-eb57-433c-b61e-4d6e567db0e5.png)

It is showing two file name which have same name and they are in two different places.

3. We can also generate webviewlink/webcontentlink by passing the id to our POST request in the form of json like this, so it will give o/p like this 

![image](https://user-images.githubusercontent.com/122452288/218998360-170e0400-aea4-430f-bb74-2b474ed462cd.png)


4. For creating the folder , we just need to give the name_of_our_folder to our POST request in the form of json like this

![image](https://user-images.githubusercontent.com/122452288/218998913-75592234-5faa-449c-afc9-0dc8c736f057.png)

our folder will look like this in our drive 

![image](https://user-images.githubusercontent.com/122452288/218999082-ad30adaf-ed49-4bb7-9831-c788cf9acb41.png)

5. for saving the file in our drive, we need to do this like this 

![image](https://user-images.githubusercontent.com/122452288/219000651-046f2c4b-77ca-4ed7-a875-5a8182a67c46.png)

here we specify four things --> 

    "file_name":"the name through which we want to save the file on our drive",
    "file_actual_name":"the actual name of file which is in our local device with extension ",
    "file_MIME_Type":"MIME type of our file ",
    "folder_id":"ID of our folder , if we don't specify it then it will save the file in our root drive not inside the folder ",
    
Our file will look like this in our folder this_is_our_eazydiner in folder like this 

![image](https://user-images.githubusercontent.com/122452288/219001496-8351916a-766e-479b-b983-3140dbefbc95.png)

    
    
## Just focus on the POST request URL and the parameters that we are passing to our request and in which format and their variables name also .

   # Thank You 
