import "./LayoutStep.css";

import PropTypes from "prop-types";

import Image from "../Image/Image";
import Title from "../Title/Title";

const LayoutStep = ({
  title,
  children,
  titleImg,
  descriptionImg,
  urlPhotoImg,
}) => {
  return (
    <div className="step-container">
      <Title text={title} level={2} />
      <div className="step-body">
        <div className="step-form">{children}</div>
        <Image
          title={titleImg}
          description={descriptionImg}
          urlPhoto={urlPhotoImg}
        />
      </div>
    </div>
  );
};

LayoutStep.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  titleImg: PropTypes.string.isRequired,
  descriptionImg: PropTypes.string.isRequired,
  urlPhotoImg: PropTypes.string.isRequired,
};

export default LayoutStep;
