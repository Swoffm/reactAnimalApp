
import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import AnimalManager from "../../directory/AnimalManager";

const AnimalList = (props) => {
    // The initial state is an empty array
            
    const [animals, setAnimals] = useState([]);

    const getAnimals = () => {
        // After the data comes back from the API, we
        //  use the setAnimals function to update state
        AnimalManager.getAll().then(animalsFromAPI => {
            setAnimals(animalsFromAPI)
        });
    };

    const deleteAnimal = id => {
        AnimalManager.delete(id)
          .then(() => AnimalManager.getAll().then(setAnimals));
      };

    // got the animals from the API on the component's first render
    useEffect(() => {
       
        getAnimals();
    }, []);
    // here animal Card is being passed props by the parent function
    //however there more than one item in the array
    //the map here is making sure that each element animal
    //will pass through animal card
    //animal Card needs a key so React can track change over time
    //Animal Card then needs an animal or element
    // Finally we use map() to "loop over" the animals array to show a list of animal cards
    return (
        <div className="container-cards">
            <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/animals/new")}}>
      Admit Animal
  </button>
</section>
            {animals.map(animal =>
                <AnimalCard key={animal.id} animal={animal} deleteAnimal={deleteAnimal}/>
            )}
        </div>
    );
};
export default AnimalList