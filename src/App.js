import React from 'react';
import { Amplify } from 'aws-amplify';

// import { Authenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ isPassedToWithAuthenticator, signOut, user }) {
  if (!isPassedToWithAuthenticator) {
    throw new Error('isPassedToWithAuthenticator was not provided');
  }

  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
}

export default withAuthenticator(App);

export async function getStaticProps() {
  console.log("getstaticprops");
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}

// export default function App() {
//   return (
//     <Authenticator>
//       {({ signOut, user }) => (
//         <>
//           <h1>Hello {user.username}</h1>
//           <button onClick={signOut}>Sign out</button>
//         </>
//       )}
//     </Authenticator>
//   );
// }
