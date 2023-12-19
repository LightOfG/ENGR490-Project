import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Text } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

    const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);

  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    // Handle scroll events
    const handleScrollEvent = () => {
      const currentScrollPosition = window.scrollY;
      const currentHeaderElement = headerRef.current;

      if (!currentHeaderElement)
        return;
    
      if (previousScrollPosition > currentScrollPosition)
      currentHeaderElement.style.transform = "translateY(0)";
      else
      currentHeaderElement.style.transform = "translateY(-100px)";
      
      previousScrollPosition = currentScrollPosition;
    };

    // Set up listeners for the scroll event
    window.addEventListener("scroll", handleScrollEvent);

    // Remove listeners for the scroll event
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {/* {socials.map(({icon, url})=>(
                <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} size="2x" key={url} />
                </a>
              ))} */}
              <a href="https://www.un.org/sustainabledevelopment/cities/"> <Text>Group - 1</Text> </a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#calculations" onClick={handleClick("calculations")}>
                Your Result
              </a>
              <a href="#about-us" onClick={handleClick("about-us")}>
                About Us
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;