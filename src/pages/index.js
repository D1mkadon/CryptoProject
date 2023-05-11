import HomePage from "@/Components/screens/Home/HomePage";
import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
const queryClient = new QueryClient();
export default function Home() {
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        <ThemeProvider key={router.pathname} theme={theme}>
          <HomePage />
        </ThemeProvider>
      </AnimatePresence>
    </QueryClientProvider>
  );
}
