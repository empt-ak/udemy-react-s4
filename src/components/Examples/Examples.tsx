import { EXAMPLES, ExampleSection } from "../../data.ts";
import TabButton from "../TabButton/TabButton.tsx";
import { useState } from "react";
import TabContent from "../TabContent/TabContent.tsx";
import Section from "../Section/Section.tsx";

type ButtonType = "components" | "tsx" | "state" | "props";

const Examples = () => {
  const [selected, setSelected] = useState<ExampleSection | null>(null);
  const [selectedTab, setSelectedTab] = useState<ButtonType | null>(null);

  const handleSelect = (selectedButton: ButtonType) => {
    setSelected(EXAMPLES[selectedButton]);
    setSelectedTab(selectedButton);
  };

  let tabContent = <p>select something</p>;

  if (selected) {
    tabContent = <TabContent {...selected} />;
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        {Object.keys(EXAMPLES).map((d, i) => {
          return (
            <TabButton key={"examples-" + i} isSelected={selectedTab === d} onClick={() => handleSelect(d as ButtonType)}>
              {EXAMPLES[d].title}
            </TabButton>
          );
        })}
      </menu>
      {tabContent}
    </Section>
  );
};

export default Examples;
