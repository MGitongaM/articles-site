import "dotenv/config"
import {defineConfig} from 'drizzle-kit'
// import { config } from 'dotenv'

// config({path:'.env'})
export default  defineConfig({
    schema:"./src/db/schema.ts",
    // out:"./src/db/migrations,",
    out:"./drizzle,",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.NEON_DATABASE_URL!,
      },
})