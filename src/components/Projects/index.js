import { ProjectsCard, ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsIcon, ProjectsP, ProjectsWrapper } from "./ProjectsElements";
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

export const Projects = () => {
    return (
        <>
            <ProjectsContainer id='projects'>
                <ProjectsH1>My Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsIcon
                        src={Icon1} 
                        />
                        <ProjectsH2>Reduce this text or give</ProjectsH2>
                        <ProjectsP>We help increase gggg tdgsh yduhuhus uhu huhxuh uwh</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon
                        src={Icon2} 
                        />
                        <ProjectsH2>Reduce this text or give</ProjectsH2>
                        <ProjectsP>We help increase gggg tdgsh yduhuhus uhu huhxuh uwh</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon
                        src={Icon3} 
                        />
                        <ProjectsH2>Reduce this text or give</ProjectsH2>
                        <ProjectsP>We help increase gggg tdgsh yduhuhus uhu huhxuh uwh</ProjectsP>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    );
};