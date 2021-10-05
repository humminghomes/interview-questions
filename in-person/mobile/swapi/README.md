# iOS Coding Challenge

## Guidance: 
Feel free to use any resources necessary. Using google won’t count against you - Stackoverflow is our friend! Completing the assignment is secondary, the goal of this exercise is to gain insight into your coding thought process and to collaborate!

## Background: 
The Resistance is having trouble keeping track of the names of their friends and enemies across the galaxy so we need your help. Using SWAPI, create an app that retrieves and displays a list of the characters from Star Wars.
----------
In XCode create a new app for the challenge. Write the code to make the API request, parse the response and display the characters in a view. Use Storyboards or SwiftUI for the visual components.

## SWAPI info:
- More info about SWAPI can be found at https://swapi.dev/
- Make the GET request to https://swapi.dev/api/people/
- SWAPI people response: 
{
"count": 1,
    "next": "https://swapi.dev/api/people/?page=2",
    "previous": null,
    "results": [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [
                "https://swapi.dev/api/vehicles/14/",
                "https://swapi.dev/api/vehicles/30/"
            ],
            "starships": [
                "https://swapi.dev/api/starships/12/",
                "https://swapi.dev/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.dev/api/people/1/"
        }
    ]
}


