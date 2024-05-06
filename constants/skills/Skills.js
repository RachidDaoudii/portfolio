import { skills } from "@/portfolio";

const Skills = ()=>{
    return (
        <div className="main container" id="skills">
          <div className="skills-header-div">
            <div>
              <h1 className="skills-header">
                Professional <span className="textSkill">Skills</span>
              </h1>
              <div className="w-full">
              {skills && skills?.data[0]?.softwareSkills.map((skill,i)=>(<div className="tech-icons">{skill.skillName}</div>))}
              </div>
            </div>
          </div>
          
        </div>
      );
}

export default Skills