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
                                {text: 'github.com/b-ran', link: 'https://github.com/b-ran'}
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
                'Led the development of a first-of-its-kind economic insights platform for New Zealand\'s largest bank using SvelteKit, Tailwind, and AWS, creating a strategic tool that differentiated ANZ from competitors',
                'Led the development of Community Compass, a custom web platform using SvelteKit, Tailwind, AWS, and Django, reversing customer attrition by delivering New Zealand\'s most comprehensive location-based insights tool',
                'Engineered a PDF generation microservice using Express.js and Puppeteer that solved the challenge of duplicating chart components across platforms, enabling data reports that use existing components and automatically caching outputs to AWS S3, which reduced report development time for projects like "The Sauce" and eliminated cross-platform consistency issues',
                'Directed technical strategy and architecture decisions as Lead Developer, establishing best practices and technical standards across multiple web platforms, resulting in efficient development workflows and consistent delivery of client-focused data visualization solutions',
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
                'Developed an end-to-end encrypted data pipeline in Python using Django, enabling secure client data uploads through a user-friendly web interface, implementing byte-level processing and real-time stream encryption to AWS S3, reducing data handling risks while improving customer onboarding processes with a solution so secure that even Dot Loves Data could not access client information without their explicit key sharing',
                'Architected and implemented Dot Loves Data\'s first REST API using Python and FastAPI, expanding the company\'s data delivery capabilities beyond traditional dashboards and enabling customers to programmatically access and integrate critical business insights directly into their own applications and workflows',
                'Implemented and maintained Kubernetes infrastructure across both AWS cloud and bare metal environments, establishing the company\'s standard deployment platform that improved scalability and reduced deployment time'
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
                'Contributed to a large-scale academic platform serving over 3 million users as part of a development team, developing features using Django and Vue within established agile workflows, gaining expertise in collaborative development practices while delivering code that met high quality standards for a production environment with significant user traffic',
                'Designed and implemented an end-to-end testing system at Publons that integrated with the existing deployment pipeline, utilizing Docker containers on EC2 instances in a Selenium grid configuration, which strengthened the quality assurance process and reduced production issues for the platform serving over 3 million academic users'
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
                    text: 'AWS, Docker, Kubernetes, PostgresSQL, Supabase',
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