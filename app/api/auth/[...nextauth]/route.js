import nextAuth from "next-auth";
import GoogleProvider from'next-auth/providers/google'
import { connectDB } from "@utils/database";
import User from "@models/user";






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
        await connectDB ();
        //check if a user exists
        const userExists = await User.findOne ({
            email :profile.email
        });
        //if not create one
        if(!userExists)  await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        
        return true;
        
    } catch (error) {

      console.log(error)  
      return false ;
    }
    }
})
export {handler as GET ,handler as POST}