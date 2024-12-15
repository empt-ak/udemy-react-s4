import { CORE_CONCEPTS } from "../../data.ts";
import CoreConcept from "../CoreConcept/CoreConcept.tsx";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((d, i) => {
          return <CoreConcept key={"cc-" + i} {...d} />;
        })}
      </ul>
    </section>
  );
};

export default CoreConcepts;
