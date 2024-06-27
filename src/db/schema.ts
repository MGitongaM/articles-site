import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const blogPost=pgTable("blog-post",{
    id:uuid('id').primaryKey(),
    title:text('title').notNull(),
    excerpt:text('excerpt').notNull(),
    mainContent:text('mainContent').notNull(),
    featuredImage:text('featuredImage').notNull(),
    readingTime:text('readingTime').notNull(),
    createdDate:timestamp('createdDate').notNull().defaultNow(),
    updatedDate:timestamp('updatedDate').notNull().$onUpdate(()=>new Date())
})