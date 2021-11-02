# Sportsee

Sportsee allows to users offers the possibility to see the fruit of their efforts with graphics

# Technologies

- CSS
- JS
- REACT
- REDUX
- RECHARTS

# Author

- CHRIS5477

# Summary 

## Use project
### use APi
#### example use API
##### Reacharts


## `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### Use API

This project SportSee use an Api to render the profil user pages, you need to download or clone a repository. You can acces on this repository on the next url : [https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard]

    Fork the repository
    Clone it on your computer.

### Launch API

To be able to use API whitin project , open a terminal and access to repository's API

### Yarn

this command will allows you to install the dependencies

### Yarn dev

This command will allows you to open a servor on port 3000 . once this command has been executed, you can access of routes' APi

#### Endpoints

The project includes four endpoints for request API

[http://localhost:3000/user/${userId}] allow to get all user's information (id, firstname, lastname, his age, his score of the day and keydata)

[http://localhost:3000/user/${userId}/activity] allow to get user's activity each day with calories and kilogram

[http://localhost:3000/user/${userId}/average-sessions] allow to get average sessions of a user per day.

[http://localhost:3000/user/${userId}/performance] allow to get user's performance

CAUTION : actually , there are only 2 users ( user's id 12 and user's id 18 )

#### Example Request `axios`

axios.get("http://localhost:3000/user/12")
.then(response => console.log(response.data))

**Example response**

{
    "data":{
        "id":12,
        "userInfos":{
            "firstName":"Karl",
            "lastName":"Dovineau",
            "age":31
            },
        "todayScore":0.12,
        "keyData":{
            "calorieCount":1930,
            "proteinCount":155,
            "carbohydrateCount":290,
            "lipidCount":50
            }
        }
}



#### Example Request `fetch`

const request = fecth("http://localhost:3000/user/${userId}/performance")
.then(response => response.json())
.then(response =>  response.data)
 
**Example response**


{
  "data": {
    "userId": 12,
    "kind": {
      "1": "cardio",
      "2": "energy",
      "3": "endurance",
      "4": "strength",
      "5": "speed",
      "6": "intensity"
    },
    "data": [
      {
        "value": 80,
        "kind": 1
      },
      {
        "value": 120,
        "kind": 2
      },
      {
        "value": 140,
        "kind": 3
      },
      {
        "value": 50,
        "kind": 4
      },
      {
        "value": 200,
        "kind": 5
      },
      {
        "value": 90,
        "kind": 6
      }
    ]
  }
    **For more information, to consult file README.md of repository of API**

 ##### Recharts

 This project use library's Recharts to make all graphics . You can visit the site : [https://recharts.org/] for more information



