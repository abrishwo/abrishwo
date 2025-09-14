# Production Deployment Guide

This guide provides instructions for deploying the portfolio website and its backend CMS to a production environment.

## Overview

The recommended production architecture consists of two main parts:
1.  **Frontend**: The Next.js application, hosted on [Vercel](https://vercel.com) for optimal performance, scalability, and ease of deployment.
2.  **Backend**: The Strapi CMS, hosted on a service like [Strapi Cloud](https://strapi.io/cloud) or a PaaS like [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform) or [Heroku](https://www.heroku.com).

---

## 1. Backend Deployment (Strapi)

Before deploying the frontend, you need a live Strapi instance to serve as the CMS.

### Option A: Strapi Cloud (Recommended)

Strapi Cloud is the official, fully managed hosting solution for Strapi.

1.  **Create a Strapi Cloud account**: Sign up at [strapi.io/cloud](https://strapi.io/cloud).
2.  **Create a new project**: Follow the on-screen instructions to create a new project.
3.  **Use the Content Type Schemas**: In your Strapi Cloud project, use the JSON schemas located in the `cms/content-types/` directory of this repository to create the `Project`, `Page`, `Testimonial`, `Tag`, and `ContactSubmission` content types.
4.  **Get your API URL**: Once deployed, your project will have a public URL. This will be your `NEXT_PUBLIC_API_URL`.
5.  **Set API Permissions**: In Strapi's admin panel, go to `Settings` -> `Roles` -> `Public`. Grant `find` and `findOne` permissions for `Project`, `Page`, `Testimonial`, and `Tag`. Grant `create` permission for `ContactSubmission`.

### Option B: Self-Hosting (e.g., DigitalOcean App Platform)

1.  **Create a Strapi Project**: Set up a new Strapi project locally. You can use the content type schemas from this repo to build your content types.
2.  **Push to GitHub**: Push your Strapi project to a new GitHub repository.
3.  **Deploy on DigitalOcean**: Create a new App on the DigitalOcean App Platform, connect it to your Strapi repository, and follow the deployment steps. You will also need to provision a PostgreSQL database.
4.  **Configure Environment**: Set the necessary environment variables for your database, JWT secret, etc., in the DigitalOcean dashboard.

---

## 2. Frontend Deployment (Vercel)

1.  **Fork this Repository**: Create a fork of this portfolio repository.
2.  **Sign up for Vercel**: Create an account at [vercel.com](https://vercel.com) using your GitHub account.
3.  **Import Project**: From your Vercel dashboard, click "Add New... -> Project" and select your forked repository.
4.  **Configure Environment Variables**: In the project settings on Vercel, navigate to the "Environment Variables" section and add the following:

| Variable Name              | Description                                                                                             | Example Value                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `NEXT_PUBLIC_API_URL`      | The public URL of your deployed Strapi backend.                                                         | `https://my-strapi-instance.onrender.com`   |
| `SENDGRID_API_KEY`         | (Optional) Your API key for SendGrid to enable email forwarding for the contact form.                   | `SG.xxxxxxxx`                               |
| `CONTACT_RECEIVER_EMAIL`   | (Optional) The email address that will receive contact form submissions.                                | `your-email@example.com`                    |
| `SENDGRID_FROM`            | (Optional) A verified sender email address in your SendGrid account.                                    | `noreply@your-domain.com`                   |

5.  **Deploy**: Click the "Deploy" button. Vercel will automatically build and deploy your Next.js application.

---

## 3. Advanced Configuration

### SendGrid Setup
To enable email notifications from the contact form:
1.  Go to [sendgrid.com](https://sendgrid.com) and create an account.
2.  Generate an API key. Use this for the `SENDGRID_API_KEY` environment variable.
3.  Verify a "Single Sender" email address. This will be the value for `SENDGRID_FROM`.

### S3 Media Storage for Strapi
For production, you should not use the local file system for media uploads. Configure Strapi to use an S3-compatible service.

1.  **Install the AWS S3 Provider**: In your Strapi project, run:
    ```bash
    yarn add @strapi/provider-upload-aws-s3
    ```
2.  **Create an S3 Bucket**: Create a new S3 bucket in your AWS account (or other S3-compatible service).
3.  **Configure Strapi**: Create a `config/plugins.js` file in your Strapi project with the following configuration:
    ```javascript
    module.exports = ({ env }) => ({
      upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
            region: env('AWS_REGION'),
            params: {
              Bucket: env('AWS_BUCKET_NAME'),
            },
          },
        },
      },
    });
    ```
4.  **Set Environment Variables**: Add the corresponding `AWS_` environment variables to your Strapi hosting environment.
