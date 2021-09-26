import { SocialIcons } from "./SocialIcons";
import { Container } from "./styled/Container.styled";
import { Flex } from "./styled/Flex.styled";
import { StyledFooter } from "./styled/Footer.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src='./images/logo_white.svg' alt='' />
                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                        <li>+1-543-123-4567</li>
                        <li>example@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons />
                </Flex>

                <p>&copy; 2021 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    );
};

export default Footer;