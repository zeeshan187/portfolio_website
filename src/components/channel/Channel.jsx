import React, {useLayoutEffect} from 'react'
import PageHeader from '../pageheader/PageHeader'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { BsLaptop } from 'react-icons/bs'
import { data } from './utils'
import './channel.css'
import {MdWork} from 'react-icons/md'
const Channel = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
      <PageHeader heading="My Resume" icon={<BsLaptop />} />
      <div className="resume_section">
        <div className="experience">
          <h3 className='resume_heading'>Experience</h3>
          <VerticalTimeline layout={'1-column'} lineColor="var(--main-color)">
            {
              data.experience.map((item, i) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{background:"none", color:"white", border:"1.5px solid var(--main-color)"}}
                  icon={<MdWork />}
                  iconStyle={{
                    background:"#181818",
                    color:"var(--main-color)"
                  }}
                >
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.experience}</h4>
                  <p>
                    {item.desc}
                  </p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
        <div className="education">
          <h3 className='resume_heading'>Education</h3>
          <VerticalTimeline layout={'1-column'} lineColor="var(--main-color)">
            {
              data.education.map((item, i) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{background:"none", color:"white", border:"1.5px solid var(--main-color)"}}
                  icon={<MdWork />}
                  iconStyle={{
                    background:"#181818",
                    color:"var(--main-color)"
                  }}

                  
                >
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.field}</h4>
                  <p>
                    {item.org}
                  </p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default Channel