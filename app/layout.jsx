import '@styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata ={
    title :"Promptopia",
    description :"Discover and Share Ai Prompts"
}

 export default function RootLayout ({children})  {
  return (
    <html lang='eng'>
        <body>
            <div className='main'>
            <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}

            </main>
        </body>

    </html>
  )
}

