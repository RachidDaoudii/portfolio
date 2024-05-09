import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
const Projects = ()=>{
    return (
        <>
            <Header/>
            <div className="main container" id="skills">
                <div className="skills-header-div">
                    <h1 className="skills-header">
                        My Recent <span className="textSkill">Works</span>
                    </h1>
                    <p className="flex justify-center mt-4 font-medium">Here are a few projects I've worked on recently.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Projects;