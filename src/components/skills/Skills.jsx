import React, {useLayoutEffect} from 'react'
import './skills.css'
import { GiSkills } from 'react-icons/gi'
import PageHeader from '../pageheader/PageHeader'
const Skills = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
      <PageHeader heading="My Skills" icon={<GiSkills />} />
      <div className="skill_section_parent">
      <div className="skills_section">
        <div className="first_skill_section">
          <h3 className="skill_div">Front End</h3>
          <div className="f_first_skill">
            <span>HTML + CSS</span>
            <div class="progress">
              <div class="progress__bar"></div>
            </div>
          </div>
          <div className="f_first_skill">
            <span>JavaScript</span>
            <div class="progress">
              <div class="progress__bar_js"></div>
            </div>
          </div>
          <div className="f_first_skill">
            <span>React Js</span>
            <div class="progress">
              <div class="progress__bar_js"></div>
            </div>
          </div>
          <div className="f_first_skill">
            <span>Bootstrap + tailwind CSS</span>
            <div class="progress">
              <div class="progress__bar"></div>
            </div>
          </div>
          <div className="f_first_skill">
            <span>Material UI</span>
            <div class="progress">
              <div class="progress__bar_js"></div>
            </div>
          </div>
        </div>
        <div className="second_skill_section">
          <h3 className="skill_div">Back End</h3>
          <div className="s_first_skill">
            <span>Node JS</span>
            <div class="progress">
              <div class="progress__bar_js"></div>
            </div>
          </div>
          <div className="s_first_skill">
            <span>Express JS</span>
            <div class="progress">
              <div class="progress__bar"></div>
            </div>
          </div>
          <div className="s_first_skill">
            <span>PHP</span>
            <div class="progress">
              <div class="progress__bar_js"></div>
            </div>
          </div>
          <div className="s_first_skill">
            <span>Java</span>
            <div class="progress">
              <div class="progress__bar_js"></div>
            </div>
          </div>
          <div className="s_first_skill">
            <span>Python</span>
            <div class="progress">
              <div class="progress__bar_py"></div>
            </div>
          </div>
        </div>
        <div className="third_skill_section">
          <h3 className="skill_div">DataBases</h3>
          <div className="t_first_skill">
            <span>MongoDB</span>
            <div class="progress">
              <div class="progress__bar"></div>
            </div>
          </div>
          <div className="t_first_skill">
            <span>MySQL</span>
            <div class="progress">
              <div class="progress__bar_py"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Skills