import "./IngredientsStep.css";

import Image from "../Image/Image";
const IngredientsStep = () => {
  return (
    <div className="ingredients-page-container">
      <h2>Add the ingredients</h2>
      <div className="ingredients-page-body">
        <div className="ingredients-page-form">add ingredients</div>
        <Image
          title="Start creating your recipe"
          description="Introduce a name, a description and a photo"
          urlPhoto="/images/ingredients.jpg"
        />
      </div>
    </div>
  );
};

export default IngredientsStep;
