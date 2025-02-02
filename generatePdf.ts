import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PdfPrinter from 'pdfmake';
import * as fs from 'fs';

import type { TDocumentDefinitions } from 'pdfmake/interfaces';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
            text: 'A versatile software engineer who leverages diverse past experiences and honed problem-solving ' +
                'techniques to develop innovative solutions across various technologies and frameworks. ' +
                'Proficient in multiple programming languages and modern development practices, with a focus on ' +
                'creating secure, efficient, and user-centric applications. Adept at applying lessons from previous ' +
                'projects to overcome new challenges and optimize processes. Passionate about continuous learning and ' +
                'thrives in collaborative environments, consistently contributing to team success through technical ' +
                'expertise, creative thinking, and a commitment to code quality.'
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
                            ul: [
                                'Leading development of ANZ business insights platform, built with SvelteKit, Tailwind, ECharts, and Supabase. The platform provides industry data on spend and economic performance to ANZ\'s business customers through a responsive web app platform.',
                                'Led development of Community Compass web platform, providing unique insights into New Zealand for councils and decision-makers across New Zealand. Collaborated with data scientists to develop a comprehensive data visualization tool, utilizing SvelteKit, Tailwind, and ECharts. The platform provides insights into New Zealand data, including demographics, businesses, and crime, helping customers make informed decisions.'								]
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
                                'Implemented the new design of the DOT Loves Data Django portal.',
                                'Built and designed DOT Loves Data Restful API platform using FastAPI and Tortoise ORM.',
                                'Deployed and maintained a Kubernetes cluster both on bare metal and AWS.',
                            ]
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
                            ]
                        },
                        {
                            text: 'Projects',
                            style: 'h3'
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
                            text: 'Public URL',
                            decoration: 'underline',
                            style: 'subtitle',
                            link: 'https://hawkesbay.communitycompass.co.nz',
                        },
                        {
                            text: 'Created Community Compass, a web dashboard product utilizing New Zealand locational data, ' +
                                'built with SvelteKit, Tailwind, and ECharts, interfacing with Snowflake for chart data. ' +
                                'Collaborated closely with cross-functional teams at DOT Loves Data, including design and ' +
                                'data science, to develop this comprehensive data visualization tool.'
                        },
                        {
                            text: 'NixOS Workstation Setup',
                            style: 'h4'
                        },
                        {
                            text: 'Open Source',
                            style: 'subtitle'
                        },
                        {
                            text: 'Public URL',
                            decoration: 'underline',
                            style: 'subtitle',
                            link: 'https://github.com/b-ran/dots',
                        },
                        {
                            text: 'Developed a NixOS flake configuration for my daily driver system, leveraging NixOS, ' +
                                'Home-Manager, Agenix, and Stylix to manage the entire setup. The project showcases a fully ' +
                                'customized Hyprland-based desktop environment with a range of packages and system components.'
                        }
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
                                { text: 'Python/Java/Ruby', style: 'item' },
                                { text: 'C/C#', style: 'item' },
                                { text: 'JavaScript/TypeScript', style: 'item' },
                                { text: 'Svelte/SvelteKit', style: 'item' },
                                { text: 'Django/Flask/FastAPI', style: 'item' },
                                { text: 'React/React Native', style: 'item' },
                                { text: 'Angular/Vue', style: 'item' },
                                { text: 'PostgresSQL/Snowflake/Firebase/Supabase', style: 'item' },
                                { text: 'GitHub/GitLab/Bitbucket/Jira', style: 'item' },
                                { text: 'Docker/Kubernetes/Jenkins/GitHub Actions', style: 'item' },
                                { text: 'Nix/NixOS' }
                            ]
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
            color: '#54B689'
        },
        h4: {
            fontSize: 12,
            bold: true,
            marginTop: 10
        },
        subtitle: {
            fontSize: 9,
            marginBottom: 5
        },
        item: {
            marginBottom: 5
        }
    },

    info: {
        title: 'Brandon Scott-Hill CV',
        author: 'Brandon Scott-Hill',
        subject: 'CV for Brandon Scott-Hill',
        keywords: 'CV Svelte SvelteKit Tailwind CSS Python Django FastAPI Kubernetes NixOS',
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
