import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const DashBoard = () => {
  return (
    <div><VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="2011 - present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      
    >
      <h3 className="vertical-timeline-element-title">Technical Assistant</h3>
      
      <p>
        Technically evaluating the devices installation
        Involvement: Assists in assessing fire safety equipment and installations to ensure they meet the
 required standards
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2010 - 2011"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      
    >
      <h3 className="vertical-timeline-element-title">Fire Safety Inspectors</h3>
      
      <p>
      - Involvement: Conducts detailed inspections of fire safety installations, like hydrants, sprinklers,
      alarms, and emergency exits. Their report is used by higher officials to make decisions
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2008 - 2010"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      
    >
      <h3 className="vertical-timeline-element-title">Assistant Divisional Fire Officer (ADFO)</h3>
      
      <p>
      Involvement: May conduct inspections and provide recommendations to the DFO or DCFO for
      the issuance of the NOC.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2006 - 2008"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      
    >
      <h3 className="vertical-timeline-element-title">Station Fire Officer SFO</h3>
      
      <p>
      - Involvement: Conducts preliminary inspections of the building or facility and ensures that basic
      fire safety measures are in place. The SFO forwards the inspection report to the DFO
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="April 2013"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      
    >
      <h3 className="vertical-timeline-element-title">Divisional Fire Officer (DFO)</h3>
     
      <p>
      Involvement: Carries out inspections, evaluates fire safety measures, and provides a report on
      compliance. The DFOs report is crucial in the decision to issue a NOC.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="November 2012"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      
    >
      <h3 className="vertical-timeline-element-title">Deputy Chief Fire Officer (DCFO)</h3>
    
      <p>
      Involvement: Conducts or supervises the inspection of the premises and ensures that fire safety
      measures are in place. Recommends issuance of the NOC to the CFO
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2002 - 2006"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      
    >
      <h3 className="vertical-timeline-element-title">Chief Fire Officer (CFO)</h3>
     
      <p>
      Involvement: Reviews and approves the final NOC after verification of compliance with fire safety
      regulations.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    />
  </VerticalTimeline></div>
  )
}

export default DashBoard