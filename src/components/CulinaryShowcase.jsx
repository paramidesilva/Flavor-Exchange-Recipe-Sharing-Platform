import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
 
const images = [
  "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/bc597f71-477b-43b7-38c9-9b8cd9d36e00/public",
  "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/aeff07d6-c711-47c3-d965-a526caf3e900/public",
  "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/b87bab28-0adc-4815-2a9d-b76ad6586600/publicContain",
  "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/5a957c90-d938-4203-3401-db2094f0f800/publicContain",
  "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/9507f01c-b2cb-42f3-12ba-5bd3eca93b00/publicContain",
  "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/c8743c83-3edd-4367-a9ad-0dffabab4600/publicContain",
];

const CulinaryShowcase = () => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: "rgb(213, 229, 213)" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center', color: '#black' }}>
        Discover Recipes That Inspire
        </Typography>
        <Typography variant="h6" sx={{ color: "#555", mb: 4, textAlign: 'center', maxWidth: "800px", mx: "auto" }}>
        Showcase Your Culinary Creations
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 5, maxWidth: "850px", mx: "auto" }}>
          Immerse yourself in a diverse selection of recipes contributed by culinary enthusiasts. Each captivating image invites you to explore techniques and flavors, empowering your cooking adventures with Flavor Exchange.
          <br /><br />
          Contribute your unique recipes and connect with others passionate about cooking. Your culinary narratives, whether traditional or innovative, add depth to our community, inviting fellow food lovers to savor every creation.
        </Typography>

        {/* IMAGE GRID WITH  ANIMATIONS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gap={4}
          maxWidth="900px"
          mx="auto"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.img
                src={img}
                alt={`recipe-${index}`}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default CulinaryShowcase;
