import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(req:NextRequest) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that gives answers to questions about The Office.',
        },
        {
          role: 'user',
          content:
            'Give me 5 quiz questions about The Office with four options and an answer, Return this string answer in the form of an object, for example the response should look like->{"q1":{"question":"","o1":"","o2":"","o3":"","o4":"","answer":""},"q2":{"question":"","o1":"","o2":"","o3":"","o4":"","answer":""},"q3":{"question":"","o1":"","o2":"","o3":"","o4":"","answer":""},"q4":{"question":"","o1":"","o2":"","o3":"","o4":"","answer":""},"q5":{"question":"","o1":"","o2":"","o3":"","o4":"","answer":""}} '
        },
      ],
      model: 'gpt-3.5-turbo',
    });
    
    
    return NextResponse.json({ data: completion.choices, status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while processing your request.', status: 500 });
  }
}
