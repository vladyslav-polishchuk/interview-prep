import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface ScreenSizes {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

function useScreenSize(options = {}): ScreenSizes {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), options);
  const isTablet = useMediaQuery(theme.breakpoints.down('md'), options);
  const isDesktop = !isMobile && !isTablet;

  return { isMobile, isTablet, isDesktop };
}

export default useScreenSize;
