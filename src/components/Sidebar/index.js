import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from "./SidebarElements";

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/detailed'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};
