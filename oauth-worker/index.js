/**
 * Cloudflare Worker — GitHub OAuth proxy for Decap CMS
 *
 * Setup:
 * 1. Create a GitHub OAuth App at https://github.com/settings/developers
 *    - Homepage URL: https://davidrourap.github.io
 *    - Callback URL: https://your-worker.workers.dev/callback
 * 2. Set secrets: wrangler secret put GITHUB_CLIENT_ID
 *                 wrangler secret put GITHUB_CLIENT_SECRET
 * 3. Deploy: wrangler deploy
 * 4. Update public/admin/config.yml base_url to this worker's URL
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://davidrourap.github.io',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (url.pathname === '/auth') {
      const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        scope: 'repo,user',
      });
      return Response.redirect(`https://github.com/login/oauth/authorize?${params}`);
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response('Missing code', { status: 400 });
      }

      const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });

      const { access_token, error } = await tokenRes.json();

      if (error || !access_token) {
        const msg = `authorization:github:error:${error ?? 'unknown'}`;
        return new Response(
          `<script>window.opener?.postMessage(${JSON.stringify(msg)}, '*'); window.close();</script>`,
          { headers: { 'Content-Type': 'text/html' } }
        );
      }

      const payload = JSON.stringify({ token: access_token, provider: 'github' });
      const msg = `authorization:github:success:${payload}`;
      return new Response(
        `<script>window.opener?.postMessage(${JSON.stringify(msg)}, '*'); window.close();</script>`,
        { headers: { 'Content-Type': 'text/html' } }
      );
    }

    return new Response('Not found', { status: 404 });
  },
};
