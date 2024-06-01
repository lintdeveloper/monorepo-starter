import type { MetaFunction } from "@remix-run/node";
import { Button } from 'shared-ui';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div> 
      <Button onClick={() => console.log('clicked')}>
        Click Me 
      </Button>
    </div>
  );
}
