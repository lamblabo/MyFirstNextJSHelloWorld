import Document, { Html, Head, Main, NextScript } from 'next/document'; 

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;900&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    } 
} 
export default MyDocument;