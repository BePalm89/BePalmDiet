import "./StartRecipeStep.css";

import Input from "../Input/Input";
import Image from "../Image/Image";
import TextArea from "../TextArea/TextArea";

const StartRecipeStep = () => {
  return (
    <div className="start-recipe-container">
      <h2>Start the recipe</h2>
      <div className="start-recipe-body">
        <div className="start-recipe-form">
          <Input
            label="name"
            id="name"
            required={true}
            placeholder="Enter the name of the recipe"
            type="text"
          />
          <TextArea
            label="description"
            required={true}
            placeholder="Enter the description for the recipe"
            id="description"
          />
        </div>
        <Image
          title="Start creating your recipe"
          description="Introduce a name, a description and a photo"
          urlPhoto="/images/start-recipe.jpg"
        />
      </div>
    </div>
  );
};

export default StartRecipeStep;
