'use client';

import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  useColorModeValue,
  Container,
  Stack,
  Heading
} from '@chakra-ui/react'

const steps = [
  {
    title: 'Project Inception and Initial Development',
    description: `Conceptualize the project, form the team, conduct market research, draft the whitepaper,
    and develop the initial blockchain infrastructure and smart contracts.`
  },
  {
    title: 'Token Generation Event (TGE) and Fundraising',
    description: `Create the native token, organize a TGE or ICO, finalize tokenomics, ensure regulatory
    compliance, and market the event to raise development funds.`
  },
  {
    title: 'Platform Development and Beta Launch',
    description: `Develop the platform's core features, design the user interface, enhance security, and
    launch a beta version to gather user feedback and make improvements.`
  },
  {
    title: 'Mainnet Launch and Ecosystem Expansion',
    description: `Officially launch the mainnet, onboard partners and users, ramp up marketing efforts,
    and integrate new features based on community feedback.`
  },
  {
    title: 'Ongoing Development and Governance',
    description: `Continuously update and improve the platform, transition to decentralized governance,
    and foster a vibrant community for long-term success.`
  },
]

export const Roadmap = () => {
  let textColor = useColorModeValue('gray.900', 'gray.100');
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <Container pb={{ base: '16', md: '24' }} pt={{ base: '10', md: '10' }}>
      <Stack spacing={{ base: '12', md: '16' }} alignItems="stretch">
        <Stack spacing={{ base: '4', md: '5' }} direction="column">
          <Heading size={{ base: 'md', md: 'lg' }}>Roadmap</Heading>
          <Stepper index={activeStep} orientation='vertical' colorScheme='orange' height='600px' gap='0'>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Stack>
      </Stack>
    </Container>
  );
};
