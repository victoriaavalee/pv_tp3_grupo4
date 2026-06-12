import { Box, Container, Typography, Divider, Stack, Link } from '@mui/material';
import { Copyright as CopyrightIcon, Code as CodeIcon } from '@mui/icons-material';

function Footer() {
  return (
    <Box component="footer" sx={{ mt: 'auto', py: 6, backgroundColor: '#f4f6f8' }}>
      <Container maxWidth="lg">
        <Divider sx={{ mb: 4 }} />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <CopyrightIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
            <Typography
              variant="caption"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'text.disabled',
                textTransform: 'uppercase',
                letterSpacing: 1
              }}>
              <CodeIcon fontSize="small" /> 2026 - Grupo 4 - Programacion Visual
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;