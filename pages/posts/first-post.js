import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layouts'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}


// import Link from 'next/link';
// import Head from 'next/head';
// import Layout from '../../components/layouts'

// export default function FirstPost() {
//   return (
//     <Layout>
//       <Head>
//         <title>First Post</title>
//       </Head>
//       <h2>
//         <Link href='/'>
//           <a>Back to Home</a>
//         </Link>
//       </h2>
//     </Layout>
//   );
// }

// // import Link from 'next/link'

// // export default function FirstPost() {
// //   return (
// //     <>
// //       <h1>First Post</h1>
// //       <h2>
// //         <Link href="/">
// //           <a>Back to home</a>
// //         </Link>
// //       </h2>
// //     </>
// //   )
// // }
