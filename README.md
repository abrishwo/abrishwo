# Algoraz CMS

This is the Strapi CMS backend for the Algoraz business website.

## Features

- **Content Management**: Full-featured CMS for managing all website content
- **Content Types**: Services, Team Members, Clients, Case Studies, FAQs, and Site Settings
- **Media Management**: Built-in media library with cloud storage support
- **User Management**: Role-based permissions and user management
- **API**: RESTful and GraphQL APIs for frontend integration
- **SEO**: Built-in SEO optimization and metadata management
- **Multi-environment**: Support for development, staging, and production environments

## Quick Start

### Local Development with Docker

1. **Clone and navigate to the CMS directory**:
   ```bash
   cd cms
   ```

2. **Copy environment variables**:
   ```bash
   cp .env.example .env
   ```

3. **Start the services**:
   ```bash
   docker-compose up -d
   ```

4. **Access the services**:
   - Strapi Admin: http://localhost:1337/admin
   - Adminer (Database): http://localhost:8080

### Local Development without Docker

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```

3. **Start the development server**:
   ```bash
   npm run develop
   ```

4. **Access the admin panel**:
   - Strapi Admin: http://localhost:1337/admin

## Content Types

### Services
Manage the services offered by Algoraz including descriptions, features, and technologies.

### Team Members
Manage team member profiles with skills, experience, and contact information.

### Clients
Manage client and partner information with logos and descriptions.

### Case Studies
Detailed project showcases linking clients, services, and team members.

### FAQs
Frequently asked questions organized by category.

### Site Settings
Global website configuration including SEO, analytics, and legal settings.

## API Endpoints

All content is available via RESTful APIs:

- **Services**: `/api/services`
- **Team Members**: `/api/team-members`
- **Clients**: `/api/clients`
- **Case Studies**: `/api/case-studies`
- **FAQs**: `/api/faqs`
- **Site Settings**: `/api/site-settings`

## Environment Configuration

### Development
- Database: PostgreSQL (local or Docker)
- Media Storage: Local filesystem
- Authentication: JWT with development secret

### Production
- Database: PostgreSQL with SSL
- Media Storage: Cloud storage (AWS S3, Cloudinary)
- Authentication: JWT with production secret
- Security: Enhanced security headers and CORS

## Deployment

### Docker Deployment
```bash
# Build and deploy
docker-compose -f docker-compose.yml up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Deployment
1. Set production environment variables
2. Run database migrations: `npm run build && npm run start`
3. Configure reverse proxy (nginx) for SSL
4. Set up monitoring and backups

## Security

- Always use strong JWT secrets in production
- Enable SSL/TLS for all connections
- Configure proper CORS settings
- Use environment variables for sensitive data
- Regularly update dependencies

## Troubleshooting

### Common Issues

1. **Database Connection**: Ensure PostgreSQL is running and credentials are correct
2. **Port Conflicts**: Check if port 1337 is available
3. **Permissions**: Ensure proper file permissions for media uploads
4. **Environment Variables**: Verify all required environment variables are set

### Getting Help

- Check the [Strapi Documentation](https://docs.strapi.io/)
- Review the [Strapi Community Forum](https://forum.strapi.io/)
- File issues on the [GitHub repository](https://github.com/strapi/strapi)

## Development

### Adding New Content Types
1. Use the Strapi admin panel or CLI
2. Define fields and relationships
3. Update frontend types and API calls
4. Test thoroughly

### Custom Plugins
Strapi supports custom plugins for extending functionality. See the [plugin documentation](https://docs.strapi.io/dev-docs/plugins) for more information.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.