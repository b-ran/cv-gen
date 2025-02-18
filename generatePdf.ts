// Libraries
import PdfPrinter from 'pdfmake';
import * as fs from 'fs';

// Types
import type { TDocumentDefinitions } from 'pdfmake/interfaces';

const docDefinition: TDocumentDefinitions = {
    content: [
        {
            columns: [
                {
                    width: '80%',
                    stack: [
                        { text: 'Brandon Scott-Hill', style: 'h1' },
                        { text: 'Lead Developer', style: 'h2' }
                    ]
                },
                {
                    width: '20%',
                    fontSize: 9,
                    decoration: 'underline',
                    stack: [
                        {
                            text: 'bran.scotthill@gmail.com',
                            link: 'mailto:bran.scotthill@gmail.com',
                            style: 'item'
                        },
                        {
                            text: 'b-ran.dev',
                            link: 'https://b-ran.dev',
                            style: 'item'
                        },
                        {
                            text: 'github.com/b-ran',
                            link: 'https://github.com/b-ran',
                            style: 'item'
                        },
                        {
                            text: 'linkedin.com/in/b-ran',
                            link: 'https://www.linkedin.com/in/b-ran',
                            style: 'item'
                        }
                    ]
                }
            ],
            marginBottom: 10
        },
        {
            text: `A software engineer who uses past experiences and creativity to solve problems and produce results. Proficient in multiple programming languages, frameworks, and development practices, I create clear, maintainable code and work closely with different teams to deliver results.`
        },
        {
            columns: [
                {
                    width: '75%',
                    stack: [
                        {
                            text: 'Experience',
                            style: 'h3'
                        },
                        {
                            text: 'Lead Developer',
                            style: 'h4'
                        },
                        {
                            text: 'DOT Loves Data | 2023 - Present',
                            style: 'subtitle'
                        },
                        {
                            ul: [ // Combine platform development together
                                 // Statement about been a lead dev what that entails
                                // Microservice print charming statement
                                // Add more spacing between the points
                                'Designed the architecture and led the development of The Sauce, built with SvelteKit, Tailwind, ECharts, and Supabase.',
                                'Developed and designed a PDF report generation microservice that enables customers to generate reports across different DOT Loves Data platforms. Currently implemented in The Sauce, the service is built with Express.js and Puppeteer.',
                                'Led the development of Community Compass. Collaborated with data scientists to develop a comprehensive data visualization tool using SvelteKit, Tailwind, and ECharts. The platform delivers insights on demographics, businesses, and crime statistics, helping customers make informed decisions.'
                            ],
                            style: 'list'
                        },
                        {
                            text: 'Software Engineer',
                            style: 'h4'
                        },
                        {
                            text: 'DOT Loves Data | 2020 - 2023',
                            style: 'subtitle'
                        },
                        {
                            ul: [
                                'Engineered secure data sharing software allowing customers to directly send data to DOT Loves Data via a Django upload interface that encrypts data with AES-256 at upload time, storing it in S3.',
                                'Built and designed DOT Loves Data Restful API platform using FastAPI and Tortoise ORM.',
                                'Deployed and maintained a Kubernetes cluster both on bare metal and AWS.',
                            ],
                            style: 'list'
                        },
                        {
                            text: 'Junior Software Engineer',
                            style: 'h4'
                        },
                        {
                            text: 'Publons | 2019 - 2020',
                            style: 'subtitle'
                        },
                        {
                            ul: [
                                'Worked with Django and Vue frontend, developing new features for Publons users in an agile setting.',
                                'Developed an end-to-end testing system integrated with the deployment pipeline. Tests ran on EC2 instances in a Selenium grid with Docker.'
                            ],
                            style: 'list'
                        },
                        {
                            text: 'Projects',
                            style: 'h3'
                        },
                        {
                            text: 'The Sauce',
                            style: 'h4'
                        },
                        {
                            text: 'Professional',
                            style: 'subtitle'
                        },
                        {
                            text: 'https://sauce.anz.co.nz/',
                            decoration: 'underline',
                            style: 'subtitle',
                            link: 'https://sauce.anz.co.nz/',
                        },
                        {
                            text: 'The Sauce is a web application that provides insights on spending and economic performance ' +
                                'to ANZ business customers enabling customers to make informed decisions based on data insights. Built with Svelte, SvelteKit, Tailwind, ECharts, Supabase, AWS, and Snowflake, ' +
                                'it was developed as a collaboration between DOT Loves Data and ANZ, involving developers, data science, data engineering, and design teams.',
                            marginBottom: 10
                        },
                        {
                            text: 'Community Compass',
                            style: 'h4'
                        },
                        {
                            text: 'Professional',
                            style: 'subtitle'
                        },
                        {
                            text: 'https://hawkesbay.communitycompass.co.nz',
                            decoration: 'underline',
                            style: 'subtitle',
                            link: 'https://hawkesbay.communitycompass.co.nz',
                        },
                        {
                            text: 'Community Compass is a web dashboard utilizing and presents a range of New Zealand locational data, ' +
                                'built with Svelte, SvelteKit, Tailwind, and ECharts, interfacing with Snowflake for chart data. ' +
                                'Collaborated closely with cross-functional teams at DOT Loves Data, including design, ' +
                                'data science, and data engineering to develop this comprehensive data visualization tool.'
                        },
                    ]

                },
                { width: '5%', stack: [] },
                {
                    width: '20%',
                    stack: [
                        {
                            text: 'Skills',
                            style: 'h3'
                        },
                        {
                            stack: [
                                { text: 'Python/Java', style: 'item' },
                                { text: 'JavaScript/TypeScript', style: 'item' },
                                { text: 'Svelte/SvelteKit', style: 'item' },
                                { text: 'Vitest/Playwright/Puppeteer', style: 'item' },
                                { text: 'Django/Flask/FastAPI', style: 'item' },
                                { text: 'React/Angular/Vue/Express.js', style: 'item' },
                                { text: 'PostgresSQL/Snowflake/Firebase/Supabase', style: 'item' },
                                { text: 'GitHub/GitLab/Bitbucket/Jira', style: 'item' },
                                { text: 'Docker/Kubernetes/Jenkins/GitHub Actions', style: 'item' },
                            ],
                            style: 'skills'
                        },
                        {
                            text: 'Education',
                            style: 'h3'
                        },
                        {
                            stack: [
                                { text: 'BE with Honours in Software Engineering', style: 'item' },
                                { text: 'Victoria University of Wellington', style: 'item' },
                                { text: '2016-2019', style: 'item' }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    defaultStyle: {
        font: 'Helvetica',
        fontSize: 10,
        marginBottom: 10,
        lineHeight: 1.2,
    },

    styles: {
        h1: {
            fontSize: 24,
            bold: true,
            color: '#54B689'
        },
        h2: {
            fontSize: 16
        },
        h3: {
            fontSize: 14,
            bold: true,
            marginTop: 10,
            marginBottom: 10,
            color: '#54B689'
        },
        h4: {
            fontSize: 12,
            bold: true,
        },
        subtitle: {
            fontSize: 9,
            marginBottom: 5
        },
        item: {
            marginBottom: 5
        },
        list: {
            lineHeight: 1.4,
            marginBottom: 10
        },
        skills: {
            lineHeight: 1.4
        }
    },

    info: {
        title: 'Brandon Scott-Hill CV',
        author: 'Brandon Scott-Hill',
        subject: 'CV for Brandon Scott-Hill',
        keywords: 'CV Svelte SvelteKit Tailwind Typescript Javascript CSS Python Django FastAPI Kubernetes Docker',
    },
};

const fonts = {
    Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
    },
};
const printer = new PdfPrinter(fonts);
const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('Brandon_Scott-Hill_CV.pdf'));
pdfDoc.end();
