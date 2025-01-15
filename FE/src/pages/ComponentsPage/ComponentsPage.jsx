import "./ComponentsPage.css";

import Banner from "../../components/Banner/Banner.jsx";
import Button from "../../components/Button/Button.jsx";
import Title from "../../components/Title/Title.jsx";
import Difficulty from "../../components/Difficulty/Difficulty.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import Image from "../../components/Image/Image.jsx";
import InfoBlock from "../../components/InfoBlock/InfoBlock.jsx";
import InfoPanel from "../../components/InfoPanel/InfoPanel.jsx";

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
          onClose={() => {}}
        />
        <Banner
          isOpen={true}
          level="success"
          message="This is a success banner"
          onClose={() => {}}
        />
        <Banner
          isOpen={true}
          level="warning"
          message="This is a warning banner"
          onClose={() => {}}
        />
        <Banner
          isOpen={true}
          level="error"
          message="This is a error banner"
          onClose={() => {}}
        />
      </div>
      <div className="difficulty-container">
        <Title text="Difficulty:" level={2} />
        <Difficulty difficulty="easy" variant="relative" />
        <Difficulty difficulty="medium" variant="relative" />
        <Difficulty difficulty="hard" variant="relative" />
      </div>
      <div className="footer-container">
        <Title text="Footer:" level={2} />
        <Footer />
      </div>
      <div className="header-container">
        <Title text="Header:" level={2} />
        <Header />
      </div>
      <div className="image-container">
        <Title text="Image:" level={2} />
        <Image
          title="title image"
          description="description image"
          urlPhoto="/images/more-info.jpg"
        />
      </div>
      <div className="info-container">
        <Title text="Info block:" level={2} />
        <InfoBlock
          title="info block title"
          description="info block description"
        />
        <InfoBlock description="info block just description" />
        <InfoBlock title="difficulty" description="hard" />
        <InfoBlock title="rating" description="5" />
      </div>
      <div className="info-panel-container">
        <Title text="Info panel" level={2} />
        <InfoPanel
          panelTitle="Preparation time"
          infos={[
            {
              title: "Preparation",
              description: `10 minutes`,
            },
            {
              title: "Cooking",
              description: `10 minutes`,
            },
          ]}
        />
        <InfoPanel
          panelTitle="Preparation time"
          infos={[
            {
              title: "Preparation",
              description: `10 minutes`,
            },
            {
              title: "Cooking",
              description: `10 minutes`,
            },
          ]}
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default ComponentsPage;
