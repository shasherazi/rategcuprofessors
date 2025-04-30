"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Ratings } from "@/components/Rating";

const formSchema = z.object({
  professorName: z.string().min(2).max(100),
  courseTitle: z.string().min(2).max(50),
  courseCode: z.string().min(2).max(20),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
});

export default function RatingPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      professorName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <div>
      <h1>Rating</h1>
      <p>Rating page content goes here.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="professorName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Professor Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Dr. Leitner" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of the professor you want to rate.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="courseTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Functional English" {...field} />
                </FormControl>
                <FormDescription>
                  This is the title of the course you want to rate.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="courseCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Code</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. GE FE-1203" {...field} />
                </FormControl>
                <FormDescription>
                  This is the code of the course you want to rate.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Ratings rating={0} totalStars={5} />
                </FormControl>
                <FormDescription>
                  This is the rating you want to give to the professor.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Textarea placeholder="e.g. Great professor!" {...field} />
                </FormControl>
                <FormDescription>
                  This is an optional comment about the professor.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="cursor-pointer">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
