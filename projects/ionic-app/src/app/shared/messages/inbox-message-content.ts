import { Message } from '../types/message';

export enum MessageExperienceContentEnum {
  CasaMiaCeramiche = `
        Working for a small company, I realize static website pages using HTML, CSS, and JS
        along with more complex websites for e-commerce purposes using CMS like WordPress and Shopify`,
  ReactConsulting = `
        Working autonomously on small and medium projects.
        My job includes:
        Implementation and maintenance of software in C# - .NET (both Framework and Core using ASP.NET MVC, Razor Pages - 80% of the time -, Blazor WASM with .NET 5);
        Creation and management of relational databases using MS SQL Server (on DB First approach) and EF Core (Code First approach);
        Development of UI (HTML, CSS, and JavaScript with frameworks such as bootstrap and jquery);
        Frontend and Backend API development (REST);
        Creation and publication of Azure applications and Azure functions, publishing everything using Azure DevOps`,
  FinconsGroup = `
        Working as a full-stack developer (in body rental) for a big insurance company located in Switzerland.
        Microservices solution deployed with Docker
        Maintenance of an Angular 8 SPA with a one-hour daily focus on learning updates and new features of Angular 14
        Implementing backend functionalities using .net core 3.1 (mostly) and .net 6`,
  TGL = `
        Working as a full-stack developer in the company's IT department.
        My role:
        Front-end | PWAs started with angular13, upgraded to full standalone angular15, built with Ionic6 for both PWA and native app.
        Back-end | .net6, Blazor WASM in a Domain-driven design app built with Clean architecture approach and CQRS pattern.
        data storage using PostgreSQL and azure blob storage`,
}

export enum MessageExperienceFormattedContentEnum {
  CasaMiaCeramiche = `
    <h3>Casa Mia Ceramiche</h3>
    <p>Working for a small company, I realized static website pages using HTML, CSS, and JS along with more complex websites for e-commerce purposes using CMS like WordPress and Shopify.</p>
  `,
  ReactConsulting = `
    <h3>React Consulting</h3>
    <p>Working autonomously on small and medium projects.</p>
    <ul>
      <li>Implementation and maintenance of software in C# - .NET (both Framework and Core using ASP.NET MVC, Razor Pages - 80% of the time -, Blazor WASM with .NET 5)</li>
      <li>Creation and management of relational databases using MS SQL Server (on DB First approach) and EF Core (Code First approach)</li>
      <li>Development of UI (HTML, CSS, and JavaScript with frameworks such as Bootstrap and jQuery)</li>
      <li>Frontend and Backend API development (REST)</li>
      <li>Creation and publication of Azure applications and Azure functions, publishing everything using Azure DevOps</li>
    </ul>
  `,
  FinconsGroup = `
    <h3>Fincons Group</h3>
    <p>Working as a full-stack developer (in body rental) for a big insurance company located in Switzerland.</p>
    <ul>
      <li>Microservices solution deployed with Docker</li>
      <li>Maintenance of an Angular 8 SPA with a one-hour daily focus on learning updates and new features of Angular 14</li>
      <li>Implementing backend functionalities using .net core 3.1 (mostly) and .net 6</li>
    </ul>
  `,
  TGL = `
    <h3>Think Global Logistics</h3>
    <p>Working as a full-stack developer in the company's IT department.</p>
    <ul>
      <li>Front-end | PWAs started with Angular 13, upgraded to full standalone Angular 15, built with Ionic 6 for both PWA and native app</li>
      <li>Back-end | .net6, Blazor WASM in a Domain-driven design app built with Clean architecture approach and CQRS pattern</li>
      <li>Data storage using PostgreSQL and Azure Blob Storage</li>
    </ul>
  `,
}

export let inboxMessages: Message[] = [
  {
    id: 0,
    fromName: 'CasaMia Ceramiche',
    subject: 'Frontend Developer Needed!!!',
    date: 'Jan 2018 - May 2018',
    content: MessageExperienceContentEnum.CasaMiaCeramiche,
    formattedContent: MessageExperienceFormattedContentEnum.CasaMiaCeramiche,
  },
  {
    id: 1,
    fromName: 'React Consulting',
    subject: 'Full Stack Developer Internship | Join our team!',
    date: 'May 2020 - May 2022',
    content: MessageExperienceContentEnum.ReactConsulting,
    formattedContent: MessageExperienceFormattedContentEnum.ReactConsulting,
  },
  {
    id: 2,
    fromName: 'Fincons Group',
    subject: 'Software Engineer ASAP',
    date: 'May 2022 - Aug 2022',
    content: MessageExperienceContentEnum.FinconsGroup,
    formattedContent: MessageExperienceFormattedContentEnum.FinconsGroup,
  },
  {
    id: 3,
    fromName: 'Think Global Logistics',
    subject: 'Hybrid mobile developer | Full stack',
    date: 'Sep 2022 - Present',
    content: MessageExperienceContentEnum.TGL,
    formattedContent: MessageExperienceFormattedContentEnum.TGL,
  },
];
