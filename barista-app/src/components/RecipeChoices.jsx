import React, { Component, useState, useEffect } from 'react';

const RecipeChoices = ({ handleChange, label, choices, checked }) => {

    return (
        <div>
            <div className="radio-buttons">
                {choices &&
                    choices.map((choice) => (
                    <div key={choice}>
                        <input
                        id={choice}
                        value={choice}
                        name={label}
                        type="radio"
                        onChange={handleChange}
                        checked={checked == choice}
                        />
                        {choice}
                    </div>
                    ))}
                </div>

        </div>
    )
}

export default RecipeChoices;