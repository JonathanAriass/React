import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  // Making sure the client is loading the data from the server
  const [isLoading, setIsLoading] = useState(true);

  // Check for fetch data error
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    // The overall useEffect shouldn't return a promise (async/await is not allowed in useEffect), that is why we use an inner function
    const fetchMeals = async () => {
      // Link to Firebase db/meals.json
      const response = await fetch("meals.json"); // fetching data from firebase

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals); // setting the meals to the state
      setIsLoading(false); // setting the isLoading state to false
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    }); // catching the error
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
