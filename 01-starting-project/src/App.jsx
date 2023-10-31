import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButtons from './components/Examples/TabButtons';
import { useState } from 'react';


function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {

    setSelectedTopic(selectedButton);
    console.log("Hello! Selected " + selectedTopic);

  }

  let tabContent = <p>Please select a topic.</p>
  if (selectedTopic) {

    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );

  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcepts key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}>
              Components
            </TabButtons>
            <TabButtons
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButtons>
            <TabButtons
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}>
              Props
            </TabButtons>
            <TabButtons
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}>
              State
            </TabButtons>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
