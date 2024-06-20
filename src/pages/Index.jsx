import React, { useState } from "react";
import { Container, VStack, Text, Box } from "@chakra-ui/react";
import { ChromePicker } from "react-color";

const Index = () => {
  const [color, setColor] = useState("#fff");

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">WebGL Color Picker</Text>
        <Text>Select a color from the picker below:</Text>
        <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
        <Box width="100px" height="100px" bg={color} border="1px solid #000" />
      </VStack>
    </Container>
  );
};

export default Index;