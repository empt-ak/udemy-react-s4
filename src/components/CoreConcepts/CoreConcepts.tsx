import { CORE_CONCEPTS } from "../../data.ts";
import CoreConcept from "../CoreConcept/CoreConcept.tsx";
import Section from "../Section/Section.tsx";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((d, i) => {
          return <CoreConcept key={"cc-" + i} {...d} />;
        })}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
