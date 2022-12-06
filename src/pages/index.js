import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import { baseUrl, fetchApi } from "src/utils/fetchApi";

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt='banner' />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium" >{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold" >{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700" >{desc1}<br />{desc2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function index ({ propertiesForRent, propertiesForSale }) {
  const { t } = useTranslation();

  return (
    <Box>
      <Banner
        purpose={t("home:sale")}
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale "
        imageUrl="https://res.cloudinary.com/dwuycckui/image/upload/v1670337917/Real%20Estate/olfix3vxzcjlmhaozjxt.jpg"
      />
      <Flex flexWrap="wrap">
        {/* Fetch the properties and map over them...  */}
      </Flex>
      <Banner
        purpose={t("home:rent")}
        title1="Rental Apartments"
        title2="Everyone"
        desc1="Explore Apartments, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent "
        imageUrl="https://res.cloudinary.com/dwuycckui/image/upload/v1670337917/Real%20Estate/olfix3vxzcjlmhaozjxt.jpg"
      />
      <Flex flexWrap="wrap">
        {/* Fetch the properties and map over them...  */}
      </Flex>
    </Box>

  )
}

export const getServerSideProps = async ({ locale }) => {
  /*   const res = await fetch('http://localhost:3000/api/tasks')
    const tasks = await res.json()
   */
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      /* tasks, */
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
      ...await serverSideTranslations(locale, ["home"])
    }
  }
}