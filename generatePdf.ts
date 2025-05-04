// Libraries
import PdfPrinter from 'pdfmake';
import * as fs from 'fs';

// Types
import type {TDocumentDefinitions} from 'pdfmake/interfaces';

const docDefinition: TDocumentDefinitions = {
    content: [
        // Header with name and contact info
        {
            text: 'Brandon Scott-Hill',
            style: 'name',
            alignment: 'center'
        },
        {
            columns: [
                {width: '*', text: ''},
                {
                    width: 'auto',
                    stack: [
                        {
                            alignment: 'center',
                            style: 'contactInfo',
                            margin: [0, 0, 0, 20],
                            text: [
                                {text: 'bran.scotthill@gmail.com', link: 'mailto:name@gmail.com'},
                                {text: ' | '},
                                {text: 'b-ran.dev', link: 'https://b-ran.dev'},
                                {text: ' | '},
                                {text: 'github.com/b-ran', link: 'https://github.com/b-ran'},
                                {text: ' | '},
                                {text: '+640277666505', link: 'tel:+640277666505'},
                            ]
                        }
                    ]
                },
                {width: '*', text: ''}
            ]
        },

        // Experience section
        {
            text: 'Experience',
            style: 'sectionHeader',
            margin: [0, 5, 0, 5]
        },
        {
            canvas: [{type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5}]
        },

        {
            columns: [
                {
                    width: '*',
                    text: 'Lead Developer, Dot Loves Data – Wellington, New Zealand',
                    style: 'jobTitle',
                    margin: [0, 10, 0, 5]
                },
                {
                    width: 'auto',
                    text: '2023 – Present',
                    alignment: 'right',
                    margin: [0, 10, 0, 5]
                }
            ]
        },
        {
            ul: [
                'Led the development of The Sauce, an economic insights platform for New Zealand\'s largest bank ANZ, unique in banking that differentiates ANZ from competitors. Calls data from Snowflake with SQL then transforms the data in SvelteKit while caching the data in Redis to present the data in Svelte components and ECharts visualizations. Implemented a Supabase backend handling both standard email authentication and enterprise SSO integration, allowing ANZ staff to seamlessly login with their Microsoft accounts',
                'Lead developer on Community Compass, a location-based insights platform for community decisions making. Built in SvelteKit and Tailwind, works by calling data insights from Snowflake with SQL and transforming the data with a data transformation middleware using Svelte stores as a local cache to be used by ECharts visualizations. Makes use of Django as a backend both to authenticate users and model data describing page views and visualizations',
                'Engineered a PDF generation API microservice that converts HTML to PDFs using Express.js and Puppeteer, eliminating cross-browser print-to-PDF consistency issues and allowing us to reuse in-app components for PDF reports. Works by calling a REST endpoint with a target web URL where a headless Chrome instance in a Docker container opens that URL and generates a PDF using Puppeteer\'s PDF API',
                'Directed technical strategy and architecture decisions as Lead Developer for Community Compass and The Sauce projects. Establishing best practices and technical standards across our web platforms, resulting in efficient development workflows and consistent delivery of client-focused data visualization solutions',
            ],
            margin: [0, 0, 0, 10],
            style: 'list'
        },

        {
            columns: [
                {
                    width: '*',
                    text: 'Software Engineer, Dot Loves Data – Wellington, New Zealand',
                    style: 'jobTitle',
                    margin: [0, 5, 0, 5]
                },
                {
                    width: 'auto',
                    text: '2020 - 2023',
                    alignment: 'right',
                    margin: [0, 5, 0, 5]
                }
            ]
        },
        {
            ul: [
                'Developed an end-to-end encrypted file sharing tool as part of our web platform using Python and Django, where file upload byte streams are encrypted using pycryptodome with AES-256 encryption before storing them in AWS S3. Engineered a custom file download stream where each download byte is decrypted, and in the case of multiple files, modified to chain files into a single zip file byte structure',
                'Architected REST API platform using Python, allowing us to serve data insights programmatically. Implemented using FastAPI to create endpoints, SQL querying data from snowflake, and JWT tokens to authenticate users',
                'Implemented and maintained physical server Kubernetes cluster using k3s and AWS cloud Kubernetes cluster using kops, now use as our infrastructure backend for our internal services and web apps. Created deployment workflows with Helm charts for web apps like Community Compass for both staging and production environments',
            ],
            margin: [0, 0, 0, 10],
            style: 'list'
        },

        {
            columns: [
                {
                    width: '*',
                    text: 'Junior Software Engineer, Publons – Wellington, New Zealand',
                    style: 'jobTitle',
                    margin: [0, 5, 0, 5]
                },
                {
                    width: 'auto',
                    text: '2019 – 2020',
                    alignment: 'right',
                    margin: [0, 5, 0, 5]
                }
            ]
        },
        {
            ul: [
                'Worked primarily in Python with Django and Vue.js at Publons as a Junior Software Engineer. Developed features like magic links to unsubscribe from email notifications by leveraging Django\'s authentication system and email backend. Worked within established agile workflows while collaborating with other developers',
                'Implemented an end-to-end testing system at Publons by modifying the existing Jenkins pipelines to run browser automation tests by utilizing Docker containers on EC2 instances via a Selenium grid configuration. Strengthened the quality assurance process for a platform serving 3 million users'
            ],
            margin: [0, 0, 0, 15],
            style: 'list'
        },

        // Skills section
        {
            text: 'Skills',
            style: 'sectionHeader',
            margin: [0, 5, 0, 5]
        },
        {
            canvas: [{type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5}]
        },
        {
            columns: [
                {
                    width: 150,
                    text: 'Languages:',
                    style: 'skillCategory',
                    margin: [0, 5, 0, 0]
                },
                {
                    width: '*',
                    text: 'Python, JavaScript, TypeScript, SQL',
                    margin: [0, 5, 0, 0]
                }
            ]
        },
        {
            columns: [
                {
                    width: 150,
                    text: 'Frameworks:',
                    style: 'skillCategory',
                    margin: [0, 5, 0, 0]
                },
                {
                    width: '*',
                    text: 'Svelte, SvelteKit, TailwindCSS, Django, FastAPI, Vue, Express.js',
                    margin: [0, 5, 0, 0]
                }
            ]
        },
        {
            columns: [
                {
                    width: 150,
                    text: 'Testing:',
                    style: 'skillCategory',
                    margin: [0, 5, 0, 0]
                },
                {
                    width: '*',
                    text: 'Vitest, Playwright, Puppeteer',
                    margin: [0, 5, 0, 0]
                }
            ]
        },
        {
            columns: [
                {
                    width: 150,
                    text: 'Backend:',
                    style: 'skillCategory',
                    margin: [0, 5, 0, 0]
                },
                {
                    width: '*',
                    text: 'AWS, Docker, Kubernetes, Helm, PostgresSQL, Supabase',
                    margin: [0, 5, 0, 0]
                }
            ]
        },
        {
            columns: [
                {
                    width: 150,
                    text: 'CI/CD:',
                    style: 'skillCategory',
                    margin: [0, 5, 0, 0]
                },
                {
                    width: '*',
                    text: 'Jenkins, Bitbucket Pipelines, GitHub Actions',
                    margin: [0, 5, 0, 0]
                }
            ]
        },

        // Education section
        {
            text: 'Education',
            style: 'sectionHeader',
            margin: [0, 20, 0, 5]
        },
        {
            canvas: [{type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5}]
        },

        // Education entries
        {
            columns: [
                {
                    width: '*',
                    text: 'Victoria University of Wellington – Bachelor of Engineering with Honours in Software Engineering',
                    margin: [0, 10, 0, 5]
                },
                {
                    width: 'auto',
                    text: '2019',
                    alignment: 'right',
                    margin: [0, 10, 0, 5]
                }
            ]
        },
    ],

    // Document styling
    styles: {
        name: {
            fontSize: 20,
            bold: true,
            margin: [0, 0, 0, 5]
        },
        contactInfo: {
            fontSize: 10,
            margin: [0, 0, 0, 10]
        },
        sectionHeader: {
            fontSize: 12,
            bold: true,
            margin: [0, 10, 0, 10]
        },
        skillCategory: {
            bold: true
        },
        jobTitle: {
            bold: true
        },
        projectTitle: {
            bold: true
        },
        list: {
            lineHeight: 1.5
        }
    },

    // Page margins
    pageMargins: [40, 40, 40, 40],

    defaultStyle: {
        font: 'Helvetica',
        fontSize: 10
    }
};

const fonts = {
    Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Calibri-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
    },
};

const printer = new PdfPrinter(fonts);
const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('Brandon_Scott-Hill_CV.pdf'));
pdfDoc.end();