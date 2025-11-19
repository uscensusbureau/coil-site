# The Census Open Innovation Labs Website

This repo includes code for the COIL website. [coil.census.gov](https://coil.census.gov/)

It is built with [Jekyll](https://jekyllrb.com/docs/) using the [uswds-jekyll theme](https://github.com/18F/uswds-jekyll)

<br/>

## Dependencies

1. Ruby v3.1.3
2. Node v4.2.3+
   - gulp (`npm i -g gulp`)
3. Bundler v2.3.18+
   - jekyll (`gem install jekyll`)
4. Chrome v59 or higher (v60 if on Windows)

<br/>

We recommend using a universal verion manager such as `asdf`
- [asdf Installation Guide](https://asdf-vm.com/guide/getting-started.html#_1-install-dependencies)

**NOTE: Ensure that `legacy_version_file = yes` has been added to your `.asdfrc` file in your home directory. Requires terminal restart.**
- [Configuring $HOME/.asdfrc](https://asdf-vm.com/manage/configuration.html#home-asdfrc)

---

## Getting Started

To work on the site, first [clone the repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository). After switching to your local copy of the repository in terminal, run the following command to install project dependencies:

```sh
npm run setup
```

<br/>

Optionally, you can run the following (the above command compiles the following scripts):

```sh
npm install
```

```sh
bundle install
```

```sh
npm update uswds
```

```sh
npm run uswds-copy-assets
```

```sh
npm run uswds-build-sass
```

<br/>

Now that all of your dependencies are installed, run:
 ```sh
 npm run watch
 ```

- This runs a series of commands that watches for any changes in both USWDS node module and the root level asset folders in this repo.

<br/>

Finally, start your local server by running the following command:

```sh
npm run serve
```
   - `npm run serve` or `npm start -- --incremental`: Runs your local server with incremental regeneration enabled to greatly improve build time. Use instead of `npm start`.

<br/>

Go to `127.0.0.1:4000` in your browser — you should be viewing a local instance



<br/>

---

## Updating Content

### Team Photos

- Change the coil_people.yml file to reflect current team
- Add both .png/.jpg and .webp files to the assets/img/team folder
- The .webp file needs to have a size of 214x271

### USWDS Assets
Note that the USWDS assets are git-tracked to make builds for Github Pages easier. Otherwise custom build actions are needed to compile the USWDS styles before each deployment. Any additional USWDS updates will need to be recompiled and committed to ensure changes are properly deployed.


## Testing

### HTML Validation

run `npm run html-proofer` to validate the site's HTML, check broken links, missing images & alts, etc with [HTMLProofer](https://github.com/gjtorikian/html-proofer).

run `npm run html-proofer:skip-external` to save time by skipping validating external links

<br/>

## Building with Pages

This repository is hooked up to [Pages](https://cloud.gov/pages/documentation/), an automatic build process used by many government websites.
Whenever you push changes to Github, Pages will make a new build (using the `federalist` command in `package.json`).

Pages will then provide a URL for this build which you can use for user testing. To get the URL for the build, click on the green check-mark next to the build status for whatever branch you just pushed to, and then click the "Details" link.

When you merge a branch into `main`, Pages will then make a new build with the same process and deploy it to opportunity.census.gov

### When a build fails

If Pages fails to build, the status dot on the branch in Github will change from yellow (in progress) to red (failed). If this happens, contact Luke Keller via Slack in the Census Bureau workspace to see the logs from the failed build. He has access to Pages itself. We do not.
