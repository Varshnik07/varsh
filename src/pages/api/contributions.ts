import type { APIRoute } from "astro";

// Runs server-side on Vercel per request (not prerendered) — this is where
// the GitHub token actually lives, set as GITHUB_TOKEN in Vercel's project
// env vars (and .env locally, gitignored). Never expose this token
// client-side.
export const prerender = false;

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

export const GET: APIRoute = async () => {
  const token = import.meta.env.GITHUB_TOKEN;

  if (!token) {
    return new Response(JSON.stringify({ error: "GITHUB_TOKEN not configured" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ query: QUERY, variables: { login: "Varshnik07" } }),
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "GitHub API request failed" }), {
        status: 502,
        headers: { "content-type": "application/json" },
      });
    }

    const data = await res.json();
    const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;
    const contributions = calendar?.totalContributions;
    const weeks = calendar?.weeks;

    if (typeof contributions !== "number" || !Array.isArray(weeks)) {
      return new Response(JSON.stringify({ error: "Unexpected GitHub API response" }), {
        status: 502,
        headers: { "content-type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ contributions, weeks }), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Fetch failed" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
};
