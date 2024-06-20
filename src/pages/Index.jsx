import React, { useState } from "react";
import { Container, VStack, Text, Box } from "@chakra-ui/react";


const Index = () => {
  const [color, setColor] = useState("#fff");

  

  const handleTouchMove = (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const target = event.target;
    const rect = target.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Assuming the color picker is a square
    const width = rect.width;
    const height = rect.height;

    // Calculate the color based on the touch position
    const r = Math.floor((x / width) * 255);
    const g = Math.floor((y / height) * 255);
    const b = 150; // Fixed value for simplicity

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">WebGL Color Picker</Text>
        <Text>Select a color from the picker below:</Text>
        <Box
          as="div"
          onTouchMove={handleTouchMove}
          width="100px"
          height="100px"
          bg={color}
          border="1px solid #000"
        />
      </VStack>
    </Container>
  );
};

export default Index;