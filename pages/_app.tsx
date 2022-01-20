import React from 'react';
import { AppProps } from 'next/app';

import '../src/utils/normalize.css';
import GlobalStyles from '../src/components/GlobalStyles';
import Layout from '../src/components/Layout';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default App;
