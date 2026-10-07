// Build-time only (uses Node fetch from Astro frontmatter, not the
// browser — GitHub's contributions fragment has no CORS header, so a
// client-side fetch would be blocked). Scrapes the same HTML fragment
// GitHub's own profile page loads for the contribution graph; there's no
// public API for this number without an authenticated GraphQL call.
export async function getContributionCount(username: string): Promise<number | null> {
  try {
    const res = await fetch(`https://github.com/users/${username}/contributions`);
    if (!res.ok) return null;
    const html = await res.text();
    const match = html.match(/([\d,]+)\s*\n?\s*contributions?\s*\n?\s*in the last year/);
    if (!match) return null;
    return parseInt(match[1].replace(/,/g, ""), 10);
  } catch {
    return null;
  }
}
