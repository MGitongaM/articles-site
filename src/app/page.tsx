import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockBlogData } from "@/constData/mockBlogData";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-5 py-10">
      <section className="container mx-auto">
        <h2 className="text-2xl font-bold">Lastest articles</h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {mockBlogData.map((blog) => (
            <Card key={blog.id}>
              <CardHeader className="space-y-4">
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription className="flex justify-center gap-4">
                  <span className="">
                    {blog.creationDate} 
                  </span>
                  <span className="">
                    {blog.readingTime}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {blog.excerpt}...
                {/* {blog.mainContent} */}
              </CardContent>
              <CardFooter className="flex justify-between">
                <p>
                  Likes:
                  {blog.likes}
                </p>
                <p>
                  Comments:
                  {blog.comments.length}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
