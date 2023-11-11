import { EXAMPLES } from '../../data';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';
import TabButtons from './TabButtons';
import { useState } from 'react';

export default function Examples() {

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
        <Section title="Examples" id="examples">
            <Tabs
                //buttonsContainer="menu"   
                buttons={
                    <>
                        <TabButtons
                            isSelected={selectedTopic === 'components'}
                            onClick={() => handleSelect('components')}>
                            Components
                        </TabButtons>
                        <TabButtons
                            isSelected={selectedTopic === 'jsx'}
                            onClick={() => handleSelect('jsx')}>
                            JSX
                        </TabButtons>
                        <TabButtons
                            isSelected={selectedTopic === 'props'}
                            onClick={() => handleSelect('props')}>
                            Props
                        </TabButtons>
                        <TabButtons
                            isSelected={selectedTopic === 'state'}
                            onClick={() => handleSelect('state')}>
                            State
                        </TabButtons>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );

}