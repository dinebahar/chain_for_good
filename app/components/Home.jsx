"use client"

import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Slider, 
  TextField, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { 
  Security as SecurityIcon, 
  Language as LanguageIcon, 
  Link as LinkIcon,
  AttachMoney as DollarIcon,
  Menu as MenuIcon
} from '@mui/icons-material';

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const DecentralizedDonationPlatform = () => {
  const [donationAmount, setDonationAmount] = useState(0.1);
  const [selectedToken, setSelectedToken] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDonationChange = (event, newValue) => {
    setDonationAmount(newValue);
  };

  const handleTokenChange = (event) => {
    setSelectedToken(event.target.value);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = ['Home', 'About', 'Donate', 'FAQ'];

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(to bottom, #1a237e, #121212)' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              OpenCharity
            </Typography>
            {isMobile ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              navItems.map((item) => (
                <Button color="inherit" key={item}>{item}</Button>
              ))
            )}
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>

        <Container maxWidth="lg" style={{ flexGrow: 1 }}>
          <Grid container spacing={4} style={{ marginTop: '2rem' }}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography variant="h2" gutterBottom>
                Decentralized Donation Platform
              </Typography>
              <Typography variant="h5" gutterBottom style={{ color: 'rgba(255,255,255,0.7)' }}>
                Secure, transparent, and cross-chain donations. Empower causes with the power of blockchain technology.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginRight: '1rem' }}>
                Donate Now
              </Button>
              <Button variant="outlined" color="primary">
                Learn More
              </Button>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent style={{ textAlign: 'center' }}>
                  <SecurityIcon style={{ fontSize: 60, color: '#3f51b5' }} />
                  <Typography variant="h5" component="h2">
                    Secure & Transparent
                  </Typography>
                  <Typography color="textSecondary">
                    Blockchain technology ensures your donations are secure and every transaction is transparent.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent style={{ textAlign: 'center' }}>
                  <LanguageIcon style={{ fontSize: 60, color: '#f50057' }} />
                  <Typography variant="h5" component="h2">
                    Cross-Chain Support
                  </Typography>
                  <Typography color="textSecondary">
                    Donate using multiple cryptocurrencies across different blockchain networks.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent style={{ textAlign: 'center' }}>
                  <LinkIcon style={{ fontSize: 60, color: '#4caf50' }} />
                  <Typography variant="h5" component="h2">
                    Decentralized
                  </Typography>
                  <Typography color="textSecondary">
                    No central authority. Direct peer-to-peer donations with smart contract automation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
                    Make a Donation
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography id="donation-slider" gutterBottom>
                        Donation Amount: {donationAmount.toFixed(2)}
                      </Typography>
                      <Slider
                        value={donationAmount}
                        onChange={handleDonationChange}
                        aria-labelledby="donation-slider"
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks
                        min={0.1}
                        max={10}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="token-select-label">Select Token</InputLabel>
                        <Select
                          labelId="token-select-label"
                          id="token-select"
                          value={selectedToken}
                          label="Select Token"
                          onChange={handleTokenChange}
                        >
                          <MenuItem value="ETH">ETH</MenuItem>
                          <MenuItem value="BTC">BTC</MenuItem>
                          <MenuItem value="USDT">USDT</MenuItem>
                          <MenuItem value="DAI">DAI</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="wallet-address"
                        label="Your Wallet Address"
                        variant="outlined"
                        placeholder="0x..."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" fullWidth>
                        Donate Now
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
                Supported Tokens
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {['Ethereum', 'Bitcoin', 'USDT', 'DAI'].map((token) => (
                  <Grid item key={token}>
                    <Card>
                      <CardContent style={{ textAlign: 'center' }}>
                        <DollarIcon style={{ fontSize: 40 }} />
                        <Typography>{token}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <footer style={{ marginTop: 'auto', padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.12)', textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            © 2024 OpenCharity. All rights reserved.
          </Typography>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default DecentralizedDonationPlatform;