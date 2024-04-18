import nextAuth from "next-auth";
import GoogleProvider from'next-auth/providers/google'







const handler = nextAuth({
    providers :[
        GoogleProvider ({
        clientId:process.env.GOOGLE_ID,
        clientSecret :process.env.GOOGLE_CLIENT_SECRET
        }

    )
    ],
    async session ({session}){
        try {
            
        } catch (error) {
            
        }
     
    },
    async signIn ({profile}){
    try {
        //serverless 
    } catch (error) {
        
    }
    }
})
export {handler as GET ,handler as POST}