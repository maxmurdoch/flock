## How do I install and get this thing running?

Make sure that you have the Gatsby CLI program installed:
```sh
yarn global add gatsby-cli
```

Install the dependencies:
```sh
yarn install
```

To start a development server:
```sh
yarn develop
```

## How does this project work?

This project/codebase is our main website. You can visit the production deployment here: https://www.flockcover.com

The architectural tech stack used is something called the JAMstack. JAMstack stand for client-side JavaScript, reusable APIs, and prebuilt Markup. 

The JAMstack offers an alternative to the LAMP and MEAN stacks and has some advantages like scaling, security, speed, and developer experience.

The three main pieces of the stack we're using here is:

- Gatsby for static site as our static site generator. 
- Netlify for hosting and deployment (including staging).
- NetlifyCMS for our headless CMS.

Gatsby is what wraps the vast majority of our code. It packages all the React that we write and generates a static site.

It uses GraphQL to grab the data it needs in order to render content on the web pages.

Each GraphQL query will pull from a specific markdown file.

NetlifyCMS is our self hosted admin/CMS system. It allows us, or other teams to edit the content on the webpages, whether that be copy, icons or links. 

This then creates another branch on github, with the new markdown in th repo. Once this has been previewed, it can then be merged to production. This will all be done under the hood in the NetlifyCMS admin dashboard.

NetlifyCMS uses a `config.yml` file to determine which widgets to present in the CMS, so that it can edit the appropriate markdown.

## Any gotchas?
