/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.thenodebook.com",
  generateRobotsTxt: false,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/404", "/api/*", "/_next/*", "/server-sitemap.xml", "/early-access", "/sync-fallback"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/404"],
      },
    ],
    additionalSitemaps: ["https://www.thenodebook.com/sitemap.xml"],
  },
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/chapters")) {
      priority = 1;
      changefreq = "daily";
    } else if (path === "/about" || path === "/contact") {
      priority = 0.5;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => {
    const additionalPaths = [];

    return additionalPaths;
  },
  autoLastmod: true,
  sourceMap: true,
};
