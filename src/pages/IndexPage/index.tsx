import { createUseStyles } from 'react-jss';
import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/shadcn_components/ui/alert';
import { AspectRatio } from '@/shadcn_components/ui/aspect-ratio';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { decrement, increment } from '@/redux/features/counter/counterSlice';
const IndexPage = () => {
  const classes = useStyles();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="content">
      <h1 className={classes.title}>Rsbuild with React Helllo123</h1>
      <p className="text-3xl font-bold underline">Start building amazing things with Rsbuild.</p>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </Alert>
      <div className="w-[450px]">
        <AspectRatio ratio={16 / 9}>Hello</AspectRatio>
      </div>
      <div>
        <div>
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
const useStyles = createUseStyles({
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default IndexPage;
