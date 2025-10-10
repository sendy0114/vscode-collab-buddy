import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Technology = () => {
  const technologies = {
    '🎨 Frontend Development': [
      'React.js', 'Next.js', 'Angular', 'Vue.js', 'Svelte', 
      'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Sass/SCSS',
      'Tailwind CSS', 'Material-UI', 'Bootstrap', 'Ant Design', 'Chakra UI'
    ],
    '⚙️ Backend Development': [
      'Node.js', 'Express.js', 'NestJS', 'Python', 'Django', 'Flask',
      '.NET Core', 'ASP.NET', 'Java', 'Spring Boot', 'PHP', 'Laravel',
      'Ruby on Rails', 'Go', 'Rust'
    ],
    '📱 Mobile Development': [
      'React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)',
      'Xamarin', 'Ionic', 'Cordova', 'Progressive Web Apps (PWA)',
      'Native Android', 'Native iOS'
    ],
    '🗄️ Databases & Storage': [
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch',
      'Firebase Realtime DB', 'Firestore', 'DynamoDB', 'Cassandra',
      'SQLite', 'Oracle', 'MS SQL Server', 'GraphQL', 'Neo4j'
    ],
    '☁️ Cloud & DevOps': [
      'AWS (EC2, S3, Lambda, RDS)', 'Microsoft Azure', 'Google Cloud Platform',
      'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'GitHub Actions',
      'Terraform', 'Ansible', 'CircleCI', 'Travis CI', 'Nginx', 'Apache'
    ],
    '🤖 AI/ML & Data Science': [
      'TensorFlow', 'PyTorch', 'scikit-learn', 'Keras', 'OpenAI GPT',
      'Hugging Face', 'LangChain', 'Computer Vision', 'NLP',
      'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebooks'
    ],
    '🔗 APIs & Integration': [
      'REST APIs', 'GraphQL', 'gRPC', 'WebSockets', 'Socket.io',
      'OAuth 2.0', 'JWT', 'Stripe API', 'PayPal API', 'Twilio',
      'SendGrid', 'AWS SDK', 'Google Maps API', 'Firebase SDK'
    ],
    '🧪 Testing & Quality': [
      'Jest', 'Mocha', 'Chai', 'Cypress', 'Selenium', 'Playwright',
      'React Testing Library', 'JUnit', 'PyTest', 'Postman',
      'SonarQube', 'ESLint', 'Prettier'
    ],
    '🛠️ Development Tools': [
      'Git', 'GitHub', 'GitLab', 'Bitbucket', 'VS Code',
      'IntelliJ IDEA', 'Xcode', 'Android Studio', 'Figma',
      'Adobe XD', 'Jira', 'Trello', 'Slack', 'Notion'
    ],
    '🔒 Security & Authentication': [
      'OAuth 2.0', 'JWT', 'Auth0', 'Firebase Auth', 'AWS Cognito',
      'SSL/TLS', 'HTTPS', 'Encryption (AES, RSA)', 'OWASP',
      'Penetration Testing', 'GDPR Compliance', 'HIPAA Compliance'
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Technology Stack</h1>
            <p className="text-lg opacity-90">
              We leverage the latest technologies and frameworks to build cutting-edge solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Modern Tech Stack for Future-Ready Solutions</h2>
            <p className="text-lg text-muted-foreground">
              We leverage cutting-edge technologies and industry best practices to build scalable, 
              secure, and high-performance applications tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardTitle className="text-xl flex items-center gap-2">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-primary/10 text-sm rounded-md hover:bg-primary hover:text-white transition-all duration-200 cursor-default font-medium hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Can't find the technology you're looking for?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team continuously adapts to emerging technologies and can quickly onboard new tools 
              based on your project requirements. Let's discuss your specific tech stack needs.
            </p>
            <a href="/contact">
              <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:scale-105 font-semibold">
                Contact Our Tech Team
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
