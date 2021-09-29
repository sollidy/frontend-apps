import { FaFacebook, FaInstagram, FaVk, FaYoutube } from "react-icons/fa"
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebRight } from "./FooterElements"

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Me</FooterLinkTitle>
                                <FooterLink to='/detailed'>Detailed</FooterLink>
                                <FooterLink to='/detailed'>How it</FooterLink>
                                <FooterLink to='/detailed'>Projects</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Me</FooterLinkTitle>
                                <FooterLink to='/detailed'>Detailed</FooterLink>
                                <FooterLink to='/detailed'>How it</FooterLink>
                                <FooterLink to='/detailed'>Projects</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Me</FooterLinkTitle>
                                <FooterLink to='/detailed'>Detailed</FooterLink>
                                <FooterLink to='/detailed'>How it</FooterLink>
                                <FooterLink to='/detailed'>Projects</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Me</FooterLinkTitle>
                                <FooterLink to='/detailed'>Detailed</FooterLink>
                                <FooterLink to='/detailed'>How it</FooterLink>
                                <FooterLink to='/detailed'>Projects</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>mark.</SocialLogo>
                            <WebRight>mark. © {new Date().getFullYear()} All rights reserved</WebRight>
                            <SocialIcons>
                                <SocialIconLink href='/' target='_blank' aria-label='Vk'>
                                    <FaVk />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                                    <FaYoutube />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}
