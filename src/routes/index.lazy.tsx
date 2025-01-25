import IndexPage from '@/pages/IndexPage';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/' as never)({
  component: IndexRouter
});

function IndexRouter() {
  return <IndexPage />;
}
