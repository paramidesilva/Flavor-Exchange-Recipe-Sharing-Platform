import React from "react";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#2c6e47", color: "#fff", py: 6, px: 4 }}>
      {/* Platform Description */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Flavor Exchange
        </Typography>
        <Typography variant="body2" sx={{ maxWidth: "700px", mx: "auto", mb: 4 }}>
          Build a simplified recipe-sharing platform where users can browse recipes, save favorites, and contribute their own creations. Discover, share, and save delicious recipes.
        </Typography>
      </Box>

      {/* Helpful Links Section */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, letterSpacing: 1 }}>
            Helpful Links
          </Typography>
          <Box>
            {["Home", "Recipe Feed", "Add Recipe", "Favorites", "Login", "Signup"].map((linkText, index) => (
              <Link
                key={index}
                href="#"
                color="inherit"
                sx={{
                  display: "block",
                  mb: 1,
                  fontSize: "16px",
                  fontWeight: "500",
                  "&:hover": {
                    color: "#f4b400",
                    textDecoration: "underline",
                  },
                }}
              >
                {linkText}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Contact Info Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, letterSpacing: 1 }}>
            Reach Us
          </Typography>
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              +94 123 456 789
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              info@flavorexchange.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              456 Oak Ave. Denver, CO
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Mon - Fri: 9:00am - 5:00pm
            </Typography>
          </Box>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, letterSpacing: 1 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#f4b400", borderRadius: "50%" },
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#f4b400", borderRadius: "50%" },
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#f4b400", borderRadius: "50%" },
              }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                "&:hover": { backgroundColor: "#f4b400", borderRadius: "50%" },
              }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: "center", mt: 4, pt: 4, borderTop: "1px solid #fff" }}>
        <Typography variant="body2" sx={{ fontSize: "14px" }}>
          © 2025 Flavor Exchange, All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
