import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Forward Metrics Assistant</title>
          <meta
            property="og:title"
            content="test-page - Forward Metrics Assistant"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_jvr3f9) => (
            <>
              <h1>{context_jvr3f9?.Name}</h1>
            </>
          )}
          initialData={props.contextJvr3f9Prop}
          persistDataDuringLoading={true}
          key={props?.contextJvr3f9Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextJvr3f9Prop = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextJvr3f9Prop: contextJvr3f9Prop?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
