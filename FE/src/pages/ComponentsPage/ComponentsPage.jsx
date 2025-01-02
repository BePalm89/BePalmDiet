import "./ComponentsPage.css";

import Banner from "../../components/Banner/Banner.jsx";
import Button from "../../components/Button/Button.jsx";
import Title from "../../components/Title/Title.jsx";

const ComponentsPage = () => {
  return (
    <div className="components-page">
      <Title text="Components" level={1} />
      <Title text="Title:" level={2} />
      <Title text="Heading level 1" level={1} />
      <Title text="Heading level 2" level={2} />
      <Title text="Heading level 3" level={3} />
      <Title text="Heading level 4" level={4} />
      <Title text="Heading level 5" level={5} />
      <Title text="Heading level 6" level={6} />
      <div className="component-container">
        <Title text="Buttons:" level={2} />
        <Button label="btn primary variant" />
        <Button label="btn secondary variant" variant="secondary" />
        <Button label="btn danger variant" variant="danger" />
        <Button label="btn disabled" disabled={true} />
        <Button
          label="btn danger with loading icon"
          variant="danger"
          isLoading={true}
        />
      </div>
      <div className="banner-container">
        <Title text="Banner:" level={2} />
        <Banner
          isOpen={true}
          level="info"
          message="This is a info banner"
          onClose={() => console.log("clicked")}
        />
        <Banner
          isOpen={true}
          level="success"
          message="This is a success banner"
          onClose={() => console.log("clicked")}
        />
        <Banner
          isOpen={true}
          level="warning"
          message="This is a warning banner"
          onClose={() => console.log("clicked")}
        />
        <Banner
          isOpen={true}
          level="error"
          message="This is a error banner"
          onClose={() => console.log("clicked")}
        />
      </div>
    </div>
  );
};

export default ComponentsPage;
