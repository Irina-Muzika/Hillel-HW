import { useState } from "react"
import Display from "./Display"
import FavoriteAnimal from "./FavoriteAnimal"
import Name from "./Name"

function App() {
    const [name, setName] = useState('')
    const [animal, setAnimal] = useState('')

    return (
        <form>
            <Name
                name={name}
                onNameChange={event => setName(event.target.value)}
            dbnf/>
            <FavoriteAnimal
                animal={animal}
                onAnimalChange={event => setAnimal(event.target.value)}
            />
            <Display
                name={name}
                animal={animal}
            />
        </form>
    )
}

export default App