# API Documentation

## [name of the service]

### - **([http type]) [name of the service]**

<details>
<summary> <i>More info...</i></summary>
<pre>

- [Title]

```curl
- [url]

- [headers]
```

### Body example

```json
{

}
```

### Response example

```json
[response]
```

</pre>
</details>

----------------------

## Login

### - **(post)Log users in**

<details>
<summary> <i>More info...</i></summary>
<pre>

- Log users in

```curl
- /v1/login/
- headers: none
```

### Body example

```json
{
  "email": "teste@email.com",
  "password": "Teste123",
}
```

### Response example

```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3YjE3MDJmLWE2N2MtNDhjOC04OWI0LTUwNmQ0ZDE2YzgyNiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjI2MjkwNTgwLCJleHAiOjE2MjYzNzY5ODB9.n93aMbIjoBb7j-845EI9eMu4mXTDrUFhnXNld9OPTl4"
}
```

</pre>
</details>


## Fetch Pokemons List

### - **(get)Fetch all pokemons with the necessary information**

<details>
<summary> <i>More info...</i></summary>
<pre>

- Fetch pokemons from the pokemon api

```curl
- /v1/pokemon/
- token: `string`
- query params: limit(20 default), offset(0 default)
```

### Body example



### Response example

```json
[
    {
        "id": 31,
        "name": "nidoqueen",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
        "type": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    }
]
```

</pre>
</details>



## Fetch Pokemon Details

### - **(get)Fetch pokemon details**

<details>
<summary> <i>More info...</i></summary>
<pre>

- Fetch all details from a specific pokemon

```curl
- /v1/pokemon/:name
- token: `string`
```

### Response example

```json
{
    "abilities": [
        {
            "ability": {
                "name": "static",
                "url": "https://pokeapi.co/api/v2/ability/9/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "lightning-rod",
                "url": "https://pokeapi.co/api/v2/ability/31/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 112,
    "forms": [
        {
            "name": "pikachu",
            "url": "https://pokeapi.co/api/v2/pokemon-form/25/"
        }
    ],
    "game_indices": [
        {
            "game_index": 84,
            "version": {
                "name": "red",
                "url": "https://pokeapi.co/api/v2/version/1/"
            }
        }
    ]


    [...]


    "types": [
        {
            "slot": 1,
            "type": {
                "name": "electric",
                "url": "https://pokeapi.co/api/v2/type/13/"
            }
        }
    ],
    "weight": 60
}


```

</pre>
</details>

