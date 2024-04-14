import { useState } from "react";
import { Box, Input, Select, SimpleGrid, Image, Heading, Text } from "@chakra-ui/react";
import { developers } from "../data/developers";

const Developers = () => {
  const [nameQuery, setNameQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState("");

  const handleNameChange = (e) => setNameQuery(e.target.value);
  const handleLocationChange = (e) => setLocationQuery(e.target.value);
  const handleTechChange = (e) => setSelectedTech(e.target.value);

  const filteredDevelopers = developers.filter(dev => 
    dev.name.toLowerCase().includes(nameQuery.toLowerCase()) &&
    dev.location.toLowerCase().includes(locationQuery.toLowerCase()) && 
    (selectedTech ? dev.specializations.includes(selectedTech) : true)
  );

  return (
    <Box p={4}>
      <Heading mb={4}>Developers for Hire</Heading>
      
      <Box mb={4}>
        <Input 
          placeholder="Search by name"
          value={nameQuery}
          onChange={handleNameChange}
          mr={2}
        />
        <Input
          placeholder="Search by location" 
          value={locationQuery}
          onChange={handleLocationChange}
          mr={2}
        />
        <Select 
          placeholder="Filter by technology"
          value={selectedTech}
          onChange={handleTechChange}
        >
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="Angular">Angular</option>
          <option value=".NET">.NET</option>
          <option value="Go">Go</option>
        </Select>
      </Box>

      <SimpleGrid columns={[1,2,3]} spacing={4}>
        {filteredDevelopers.map(dev => (
          <Box key={dev.id} p={4} borderWidth={1} borderRadius="lg">
            <Image src={dev.photo} alt={dev.name} mb={2} />
            <Heading size="md">{dev.name}</Heading>
            <Text>{dev.location}</Text>
            <Text>{dev.specializations.join(", ")}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Developers;