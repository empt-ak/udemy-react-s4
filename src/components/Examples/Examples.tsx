import { EXAMPLES, ExampleSection } from "../../data.ts";
import TabButton from "../TabButton/TabButton.tsx";
import { useState } from "react";
import TabContent from "../TabContent/TabContent.tsx";

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
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {Object.keys(EXAMPLES).map((d, i) => {
          return (
            <TabButton
              key={"examples-" + i}
              isSelected={selectedTab === d}
              onSelect={() => handleSelect(d as ButtonType)}
            >
              {EXAMPLES[d].title}
            </TabButton>
          );
        })}
      </menu>
      {tabContent}
    </section>
  );
};

export default Examples;
