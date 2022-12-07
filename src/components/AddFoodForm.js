import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Image</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Calories</label>
      <Input value={undefined} type="number" onChange={() => {}} />

      <label>Servings</label>
      <Input value={undefined} type="number" onChange={() => {}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
