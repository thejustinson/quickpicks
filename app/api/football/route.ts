import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch("https://api.football-data.org/v4/matches", {
      headers: { "X-Auth-Token": process.env.NEXT_PUBLIC_FOOTBALL_API_KEY! }
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching football data:', error);
    return NextResponse.json({ error: 'An error occurred while fetching football data' }, { status: 500 });
  }
}