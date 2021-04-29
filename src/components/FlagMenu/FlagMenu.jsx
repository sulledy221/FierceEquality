import React, { Component } from 'react';
import './FlagMenu.css';
import { Accordion, Icon } from 'semantic-ui-react';
import {flags} from './config'


const AccordionContent = (content) => (
  <div>
    {content}
  </div>
)
const LinksAccordionPanels = [{
    title: '',
    content: { content: 'SubAccordion1Content', key: 'sa1-content' },
    key: 'sub-accordion-1'
  }
]



const LinksAccordionContent = (
    <div>
      <Accordion.Accordion
        style={{marginLeft: "20px"}}
        className="no-padding"
        panels={LinksAccordionPanels}
      />
    </div>
  )

const renderFlags = () => {
    return flags.map ((flag) => (
        {
            title: <img src={`/Assets/${flag}.jpeg`} className="image"/> ,

            content: LinksAccordionContent ,
            key: 'sub-accordion-11'
          }
    ))
}

const SubAccordion1Panels = renderFlags()

const SubAccordion1Content = (
  <div>
    <Accordion.Accordion
      style={{marginLeft: "20px"}}
      className="no-padding"
      panels={SubAccordion1Panels}
    />
  </div>
)

const SubAccordionPanels = [
  {
    title: '',
    content: { content: SubAccordion1Content, key: 'sa1-content' },
    key: 'sub-accordion-1'
  }
]

const SubAccordions = (
  <div>
    <Accordion.Accordion
      className="no-padding"
      panels={renderFlags()}
    />
  </div>
)

const AccordionPanels = [
  { title: '♡♡♡' , content: { content: SubAccordions, key: 'sub-accordions' } },
]

const FlagMenu = () => (
  <Accordion
    defaultActiveIndex={0}
    panels={AccordionPanels}
  />
)


export default FlagMenu


