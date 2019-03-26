# FlockCover.com

## What is this?

This is the codebase for our main website: https://flockcover.com

It has an admin panel (CMS) located at https://flockcover.com/admin/

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

This project/codebase is our main website. You can visit the production deployment here: https://flockcover.com

The architectural tech stack used is something called the JAMstack. JAMstack stand for client-side JavaScript, reusable APIs, and prebuilt Markup. 

The JAMstack offers an alternative to the LAMP and MEAN stacks and has some advantages like scaling, security, speed, and developer experience.

The three main pieces of the stack we're using here is:

- Gatsby as our static site generator. 
- Netlify for hosting and deployment (including staging).
- NetlifyCMS for our headless CMS.

Gatsby is what wraps the vast majority of our code. It packages all the React that we write and generates a static site. All the Gatsby page code are in the `/templates` directory.

It uses GraphQL to grab the data it needs in order to render content on the web pages.

Each GraphQL query will pull from a specific markdown file. These files are located in the `/pages` directory.

Netlify is our hosting and CI service.

NetlifyCMS is an open-source project of Netlify and is our self hosted admin/CMS system. It allows us, or other teams to edit the content on the webpages, whether that be copy, icons or links. 

This then creates another branch on github, with the new markdown in th repo. Once this has been previewed, it can then be merged to production. This will all be done under the hood in the NetlifyCMS admin dashboard.

NetlifyCMS uses a `config.yml` file to determine which widgets to present in the CMS, so that it can edit the appropriate markdown.

`gatsby-config.js` is the entry point of the site, but you'll rarely need to go into here. This is what essentially tells determines how the pages are built. It will create the page slugs and routing structure of the site based on the file directory structure of our markdown.


## How do I add a new web page? 

To do this you'll need to first do three things:

1. Create a new page template in the `/templates` directory. This is where you'll write all of your JSX.
2. Create a new markdown file in the `pages` directory. 
3. Go back into your page template and wire it up to the markdown file in a GraphQL query.

If making changes to both markdown and GraphQL query, Gatsby may complain and error in the terminal. You may need to `CTRL+C` and rerun `yarn develop`. This will wipe the cache and rebuild.

Once you have your web page looking how you like, you'll need to do an extra step to be able to edit the content in the admin (via Netlify CMS).

You'll need to go into the `static/config.yml` and add your new page as a collection. Essentially, you'll declare all the content that you want to expose to the CMS and which widget you want to provide access. These widgets may include a switch (for toggling), image uploaders, markdown fields or string inputs.

A little gotcha is that you'll first need to merge your static page to master before you can test that the CMS is pulling in the right markdown. This is due to NetlifyCMS currently only reading from master.

Once you've done this, you can check that your `config.yml` is set up properly by going to `localhost:3000/admin`.


## How do I deploy? 

This is all done for you. 

When you create a new PR, Netlify will create a new staging build for you to review. This will be linked to in the PR checks.

Once you've merged to master, Netlify will automatically start building and if successfuly, deploy to production.
