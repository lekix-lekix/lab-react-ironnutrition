import { React, useState } from 'react';
import { Input, Divider } from 'antd';

const AddFoodForm = (props) => {
  const [foodName, setFoodName] = useState('');
  const [foodImage, setFoodImage] = useState('');
  const [foodCalories, setFoodCalories] = useState(0);
  const [foodServings, setFoodServings] = useState(0);

  const handleFoodName = (event) => setFoodName(event.target.value);
  const handleFoodImage = (event) => setFoodImage(event.target.value);
  const handleFoodCalories = (event) => setFoodCalories(event.target.value);
  const handleFoodServings = (event) => setFoodServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFoodItem = {
      name: foodName,
      image: foodImage,
      calories: foodCalories,
      servings: foodServings,
    };

    props.addFunction(newFoodItem);

    setFoodName('');
    setFoodImage('');
    setFoodCalories('');
    setFoodServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={foodName} type="text" onChange={handleFoodName} />

      <label>Image</label>
      <Input value={foodImage} type="text" onChange={handleFoodImage} />

      <label>Calories</label>
      <Input value={foodCalories} type="number" onChange={handleFoodCalories} />

      <label>Servings</label>
      <Input value={foodServings} type="number" onChange={handleFoodServings} />

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
