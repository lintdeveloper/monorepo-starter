import type { MetaFunction } from '@remix-run/node'
{
  /* TODO: Resolve error with export a vite error */
}
// import { Button } from 'shared-ui';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div>
      {/* TODO: Resolve error with export a vite error */}
      {/* <Button onClick={() => console.log('clicked')}>
        Click Me 
      </Button> */}
    </div>
  )
}
