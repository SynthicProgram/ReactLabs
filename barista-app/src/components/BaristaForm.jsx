import {Component, useState} from 'react';
import RecipeChoices from './RecipeChoices';
import drinksJson from "./drinks.json"

export default function BaristaForm() {
  const ingredients = {
    'temperature' : ['hot', 'lukewarm', 'cold'],
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
    'blended': ['yes', 'turbo', 'no']
  };
  
  const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''  
    });

    const [currentDrink, setCurrentDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState({});

    const [correctTemp, setCheckedTemp] = useState('');
    const [correctSyrup, setCheckedSyrup] = useState('');
    const [correctMilk, setCheckedMilk] = useState('');
    const [correctBlended, setCheckedBlended] = useState('');

    const onCheckAnswer = () => {
      trueRecipe.temp != inputs['temperature'] ? setCheckedTemp('wrong') : setCheckedTemp('correct'); 
      trueRecipe.syrup != inputs['syrup'] ? setCheckedSyrup('wrong') : setCheckedSyrup('correct');
      trueRecipe.milk != inputs['milk'] ? setCheckedMilk('wrong') : setCheckedMilk('correct');
      trueRecipe.blended != inputs['blended'] ? setCheckedBlended('wrong') : setCheckedBlended('correct');
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      resetAnswer();
      //setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const resetAnswer = () => {
      setCheckedTemp('');
      setCheckedSyrup('');
      setCheckedMilk('');
      setCheckedBlended('');
    };

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' });

        resetAnswer();
        getNextDrink();
    };

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    };

    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className='drink-container'> 
                <h3 className='mini-header'>{currentDrink}</h3>
            </div>

            <div className='container'>
              <div className='mini-container'>
                  <h3>Temperature</h3>
                  <div id={correctTemp} className="answer-space" >
                      {correctTemp && inputs["temperature"]} 
                  </div>
                  <RecipeChoices
                      handleChange={handleChange}
                      label="temperature"
                      choices={ingredients["temperature"]}
                      checked={inputs["temperature"]}
                  />
              </div>

              <div className='mini-container'>
                <h3>Syrup</h3>
                <div id={correctSyrup} className="answer-space" >
                    {correctSyrup && inputs["syrup"]} 
                </div>
                <RecipeChoices
                    handleChange={handleChange}
                    label="syrup"
                    choices={ingredients["syrup"]}
                    checked={inputs["syrup"]}
                />
              </div>

              <div className='mini-container'>
                <h3>Milk</h3>
                <div id={correctMilk} className="answer-space" >
                    {correctMilk && inputs["milk"]} 
                </div>
                <RecipeChoices
                    handleChange={handleChange}
                    label="milk"
                    choices={ingredients["milk"]}
                    checked={inputs["milk"]}
                />
              </div>

              <div className='mini-container'>
                <h3>Blended</h3>
                <div id={correctBlended} className="answer-space" >
                    {correctBlended && inputs["blended"]} 
                </div>
                <RecipeChoices
                    handleChange={handleChange}
                    label="blended"
                    choices={ingredients["blended"]}
                    checked={inputs["blended"]}
                />
              </div>
            </div>

            <button type='submit' className='button submit' onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button type='new-drink-button' className='button submit' onClick={onNewDrink}>
                New Drink
            </button>
        </div>
    );
}