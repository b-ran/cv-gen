// Libraries
import pdfMake from "pdfmake";
import * as fs from "fs";

// Types
import type { TDocumentDefinitions } from "pdfmake/interfaces";

const docDefinition: TDocumentDefinitions = {
  content: [
    {
      text: "Brandon Scott-Hill",
      style: "name",
      alignment: "center",
    },
    {
      columns: [
        { width: "*", text: "" },
        {
          width: "auto",
          stack: [
            {
              alignment: "center",
              style: "contactInfo",
              margin: [0, 0, 0, 2],
              text: [
                { text: "+61 0480 580 953" },
                { text: " | " },
                {
                  text: "bran.scotthill@gmail.com",
                  link: "mailto:bran.scotthill@gmail.com",
                },
                { text: " | " },
                { text: "Melbourne, VIC" },
                { text: " | " },
                { text: "NZ citizen - full AU work rights" },
              ],
            },
            {
              alignment: "center",
              style: "contactInfo",
              margin: [0, 0, 0, 10],
              text: [
                {
                  text: "linkedin.com/in/b-ran",
                  link: "https://linkedin.com/in/b-ran",
                },
                { text: " | " },
                { text: "b-ran.dev", link: "https://b-ran.dev" },
                { text: " | " },
                {
                  text: "github.com/b-ran",
                  link: "https://github.com/b-ran",
                },
              ],
            },
          ],
        },
        { width: "*", text: "" },
      ],
    },

    // Personal statement
    {
      text: "Software engineer with 7 years of professional experience building data-heavy web platforms from zero to production, owning stack decisions end to end. Have led development teams in my last two roles.",
      style: "summary",
      margin: [0, 0, 0, 5],
    },

    // Experience section
    {
      text: "Experience",
      style: "sectionHeader",
      margin: [0, 5, 0, 5],
    },
    {
      canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5 }],
    },

    {
      columns: [
        {
          width: "*",
          text: "Senior Software Engineer, AlterraLink - Melbourne, Australia",
          style: "jobTitle",
          margin: [0, 10, 0, 5],
        },
        {
          width: "auto",
          text: "2025 - Present",
          alignment: "right",
          margin: [0, 10, 0, 5],
        },
      ],
    },
    {
      ul: [
        "Re-architected FreightReserve for multi-tenancy isolated per-tenant databases for private operational data with a global identity layer for shared logins across tenants, serving ~2,000 active users at container freight stations and freight forwarders across AU.",
        "Rebuilt the booking and timeslot engine after a race condition allowed bookings to exceed slot capacity moved enforcement fully server-side and cut the implementation from ~5,000 to ~1,000 lines, with no overbooking since.",
        "Two developers as direct reports in a five-person team, using SvelteKit, PostgreSQL/Supabase, and Vercel.",
        "Designed a full rework of the FreightReserve interface in Figma and currently leading its implementation across the platform",
      ],
      margin: [0, 0, 0, 5],
      style: "list",
    },

    {
      columns: [
        {
          width: "*",
          text: "Lead Developer, Dot Loves Data - Wellington, New Zealand",
          style: "jobTitle",
          margin: [0, 10, 0, 5],
        },
        {
          width: "auto",
          text: "2023 - 2025",
          alignment: "right",
          margin: [0, 10, 0, 5],
        },
      ],
    },
    {
      ul: [
        "Technical lead across Dot's greenfield web platforms. Chose the full stack (SvelteKit, backend, testing and charting libraries, AWS infrastructure), defined the code review process and quality standards, and led two developers from zero to production.",
        "The Sauce by ANZ™ greenfield business insights platform turning anonymized card spend, demographic and property data into reports for ANZ's business customers. ~300 internal users; delivered zero to production in six months and still ANZ's live product today.",
        "Community Compass location insights platform used by ~20 NZ councils for community planning, 8 of which deployed public-facing versions for residents. Built end-to-end and still in use today.",
        "Built the HTML-to-PDF service behind The Sauce's customer reports (Express.js, Puppeteer, ~100/day) replaced browser print-to-PDF, where output varied with each user's settings, browser version and OS, with deterministic server-side rendering.",
      ],
      margin: [0, 0, 0, 5],
      style: "list",
    },

    {
      columns: [
        {
          width: "*",
          text: "Software Engineer, Dot Loves Data - Wellington, New Zealand",
          style: "jobTitle",
          margin: [0, 5, 0, 5],
        },
        {
          width: "auto",
          text: "2020 - 2023",
          alignment: "right",
          margin: [0, 5, 0, 5],
        },
      ],
    },
    {
      ul: [
        "Built an end-to-end encrypted upload pipeline (Django, byte-level stream encryption to S3) where data was encrypted client-side - Dot Loves Data itself couldn't decrypt without a customer-shared key. Unblocked onboarding for privacy-sensitive clients.",
        "Architected and shipped the company's first REST API (Python, FastAPI), enabling programmatic integrations with external data partners for the first time and bringing on 5 new partner clients.",
        "Established the company's deployment and automation platform - migrated ~20 services off manually managed Docker Compose onto Kubernetes/Helm across AWS and bare metal, and introduced Jenkins CI/CD running 50+ daily jobs company-wide.",
      ],
      margin: [0, 0, 0, 5],
      style: "list",
    },

    {
      columns: [
        {
          width: "*",
          text: "Junior Software Engineer, Publons - Wellington, New Zealand",
          style: "jobTitle",
          margin: [0, 5, 0, 5],
        },
        {
          width: "auto",
          text: "2019 - 2020",
          alignment: "right",
          margin: [0, 5, 0, 5],
        },
      ],
    },
    {
      ul: [
        "Contributed to an academic platform serving over 3 million users, developing features in Python using Django and Vue within established agile workflows.",
      ],
      margin: [0, 0, 0, 5],
      style: "list",
    },

    // Skills section
    {
      text: "Skills",
      style: "sectionHeader",
      margin: [0, 5, 0, 5],
    },
    {
      canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5 }],
    },
    {
      columns: [
        {
          width: 150,
          text: "Languages:",
          style: "skillCategory",
          margin: [0, 5, 0, 0],
        },
        {
          width: "*",
          text: "TypeScript, JavaScript, Python, SQL",
          margin: [0, 5, 0, 0],
        },
      ],
    },
    {
      columns: [
        {
          width: 150,
          text: "Frameworks & Tools:",
          style: "skillCategory",
          margin: [0, 5, 0, 0],
        },
        {
          width: "*",
          text: "Svelte, SvelteKit, DrizzleORM, Supabase, TailwindCSS, Django, FastAPI, Vue, Express.js, Figma",
          margin: [0, 5, 0, 0],
        },
      ],
    },
    {
      columns: [
        {
          width: 150,
          text: "Testing:",
          style: "skillCategory",
          margin: [0, 5, 0, 0],
        },
        {
          width: "*",
          text: "Vitest, Playwright, Puppeteer",
          margin: [0, 5, 0, 0],
        },
      ],
    },
    {
      columns: [
        {
          width: 150,
          text: "Backend:",
          style: "skillCategory",
          margin: [0, 5, 0, 0],
        },
        {
          width: "*",
          text: "AWS, Docker, Kubernetes, Helm, PostgreSQL",
          margin: [0, 5, 0, 0],
        },
      ],
    },
    {
      columns: [
        {
          width: 150,
          text: "CI/CD:",
          style: "skillCategory",
          margin: [0, 5, 0, 0],
        },
        {
          width: "*",
          text: "GitHub Actions, Jenkins, Bitbucket Pipelines",
          margin: [0, 5, 0, 0],
        },
      ],
    },

    // Education section
    {
      text: "Education",
      style: "sectionHeader",
      margin: [0, 10, 0, 5],
    },
    {
      canvas: [{ type: "line", x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5 }],
    },

    // Education entries
    {
      columns: [
        {
          width: "*",
          text: "Victoria University of Wellington - Bachelor of Engineering with Honours in Software Engineering",
          margin: [0, 10, 0, 5],
        },
        {
          width: "auto",
          text: "2019",
          alignment: "right",
          margin: [0, 10, 0, 5],
        },
      ],
    },
  ],

  // Document styling
  styles: {
    name: {
      fontSize: 16,
      bold: true,
      margin: [0, 0, 0, 5],
    },
    contactInfo: {
      fontSize: 10,
      margin: [0, 0, 0, 5],
    },
    summary: {
      fontSize: 10,
      lineHeight: 1.4,
    },
    sectionHeader: {
      fontSize: 11,
      bold: true,
      margin: [0, 10, 0, 5],
    },
    skillCategory: {
      bold: true,
    },
    jobTitle: {
      bold: true,
    },
    projectTitle: {
      bold: true,
    },
    list: {
      lineHeight: 1.5,
    },
  },

  // Page margins
  pageMargins: [40, 40, 40, 40],

  defaultStyle: {
    font: "Helvetica",
    fontSize: 10,
  },
};

const fonts = {
  Helvetica: {
    normal: "Helvetica",
    bold: "Helvetica-Bold",
    italics: "Calibri-Oblique",
    bolditalics: "Helvetica-BoldOblique",
  },
};

pdfMake.setFonts(fonts);
pdfMake.setUrlAccessPolicy(() => false);
pdfMake.setLocalAccessPolicy(() => true);
pdfMake
  .createPdf(docDefinition)
  .getStream()
  .then((pdfDoc) => {
    pdfDoc.pipe(fs.createWriteStream("Brandon_Scott-Hill_CV.pdf"));
    pdfDoc.end();
  });
