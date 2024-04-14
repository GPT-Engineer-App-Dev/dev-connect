import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaSearch, FaCode, FaComments, FaHandshake } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="gray.800" color="white" py={24}>
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" mb={4}>
            Hire Top Software Talent
          </Heading>
          <Text fontSize="xl" mb={8}>
            Particles is the leading marketplace for companies to find and hire specialized developers in web technologies like React, Node.js, .NET, Go and JavaScript.
          </Text>
          <Button size="lg" colorScheme="blue">
            View Developer Listings
          </Button>
        </Container>
      </Box>

      {/* Benefits */}
      <Box py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading size="xl" mb={4}>
                The Best Developers, On Demand
              </Heading>
              <Stack spacing={6}>
                <Flex alignItems="center">
                  <FaCode size={30} color="blue.500" />
                  <Text ml={3}>Access to pre-vetted, high-quality developers</Text>
                </Flex>
                <Flex alignItems="center">
                  <FaSearch size={30} color="blue.500" />
                  <Text ml={3}>Wide range of specializations and expertise</Text>
                </Flex>
                <Flex alignItems="center">
                  <FaComments size={30} color="blue.500" />
                  <Text ml={3}>Easy search and filtering to find the perfect match</Text>
                </Flex>
                <Flex alignItems="center">
                  <FaHandshake size={30} color="blue.500" />
                  <Text ml={3}>Streamlined hiring process</Text>
                </Flex>
              </Stack>
            </Box>
            <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjBjb2xsYWJvcmF0aW5nfGVufDB8fHx8MTcxMzAzMTYyOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Developers" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Heading textAlign="center" size="2xl" mb={16}>
            How It Works
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} textAlign="center">
            <Box>
              <FaSearch size={50} color="blue.500" />
              <Heading size="lg" mt={4} mb={2}>
                1. Search
              </Heading>
              <Text>Search developer listings</Text>
            </Box>
            <Box>
              <FaCode size={50} color="blue.500" />
              <Heading size="lg" mt={4} mb={2}>
                2. Filter
              </Heading>
              <Text>Filter by technology and location</Text>
            </Box>
            <Box>
              <FaComments size={50} color="blue.500" />
              <Heading size="lg" mt={4} mb={2}>
                3. Message
              </Heading>
              <Text>Message developers directly</Text>
            </Box>
            <Box>
              <FaHandshake size={50} color="blue.500" />
              <Heading size="lg" mt={4} mb={2}>
                4. Hire
              </Heading>
              <Text>Hire and start your project</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
