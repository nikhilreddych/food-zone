import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Section = ({ id, title, description, isExpanded, setIsExpanded }) => {
  return (
    <div className="border border-gray-300 m-3 p-2">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => {
          if (isExpanded) {
            setIsExpanded("");
          } else {
            setIsExpanded(id);
          }
        }}>
        <div className="text-lg font-bold">{title}</div>
        {isExpanded ? (
          <IoIosArrowUp className="h-6 w-6" />
        ) : (
          <IoIosArrowDown className="h-6 w-6" />
        )}
      </div>
      {isExpanded ? <div className="text-sm m-2">{description}</div> : <></>}
    </div>
  );
};

const InstaMart = () => {
  const [expandedSection, setExpandedSection] = useState("about");

  const description =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
  return (
    <div>
      <Section
        key="about"
        id="about"
        title="About Us"
        description={description}
        isExpanded={expandedSection === "about"}
        setIsExpanded={(key) => setExpandedSection(key)}
      />
      <Section
        key="team"
        id="team"
        title="Our Team"
        description={description}
        isExpanded={expandedSection === "team"}
        setIsExpanded={(key) => setExpandedSection(key)}
      />
      <Section
        key="careers"
        id="careers"
        title="Insta Careers"
        description={description}
        isExpanded={expandedSection === "careers"}
        setIsExpanded={(key) => setExpandedSection(key)}
      />
      <Section
        key="products"
        id="products"
        title="Our Products"
        description={description}
        isExpanded={expandedSection === "products"}
        setIsExpanded={(key) => setExpandedSection(key)}
      />
    </div>
  );
};

export default InstaMart;
