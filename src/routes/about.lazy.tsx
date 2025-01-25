import About from '@/pages/About';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about' as never)({
  component: AboutRouter
});

function AboutRouter() {
  return <About />;
}
