import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
  Section,
} from "@react-email/components";


interface WelcomeEmailProps {
 url: string;
}

export const WelcomeEmail = ({ url }: WelcomeEmailProps) => {
  const previewText = `Welcome to , Khata!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-10 mx-auto p-5 w-[465px]">
            <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">
              Welcome to Khata!
            </Heading>
            <Text className="text-sm">Hello,</Text>
            <Text className="text-sm">
              Thank you for signing up. Here is your link to get started:
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#00A3FF] rounded text-white text-xs font-semibold no-underline text-center"
                href={url}
              >
                Get Started
              </Button>
              <Text className="text-sm mt-[16px]">
                If you did not sign up for Khata, please ignore this email.
              </Text>
            </Section>
            <Text className="text-sm">
              Cheers,
              <br />
              The Khata Team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};