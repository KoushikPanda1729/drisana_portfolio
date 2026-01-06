'use client';

import { Layout, Button, Row, Col, Typography, Tag, Divider } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const projects = [
  {
    id: 'e-commerce-mobile-app',
    title: 'E-Commerce Mobile App Redesign',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    description: 'Redesigned e-commerce mobile interface with focus on streamlined navigation, reducing checkout steps from 5 to 3.',
    highlights: [
      'Developed high-fidelity interactive prototypes in Figma spanning 15+ screens',
      'Created cohesive design system with reusable components',
      'Implemented micro-interactions for enhanced user experience'
    ],
    tags: ['Figma', 'Mobile Design', 'E-Commerce', 'UX Research'],
    challenge: 'The original e-commerce app had a complex checkout process that resulted in high cart abandonment rates. Users found it difficult to navigate through multiple steps, and the interface lacked visual consistency.',
    solution: 'I redesigned the entire user flow, reducing checkout steps from 5 to 3 by consolidating similar information. Created a comprehensive design system to ensure visual consistency across all screens. Added micro-interactions to provide feedback and improve the overall user experience.',
    impact: 'The redesign resulted in a more intuitive shopping experience with reduced friction points and improved visual appeal.'
  },
  {
    id: 'restaurant-booking-website',
    title: 'Restaurant Booking Website UI',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    description: 'Designed fully responsive website from low-fidelity wireframes to polished high-fidelity mockups.',
    highlights: [
      'Established comprehensive style guide including typography and color palette',
      'Applied WCAG-compliant color contrast ratios for accessibility',
      'Created component library for design consistency'
    ],
    tags: ['Responsive Design', 'Accessibility', 'Web Design', 'Adobe XD'],
    challenge: 'Creating a restaurant booking platform that works seamlessly across all devices while maintaining accessibility standards and visual appeal.',
    solution: 'Started with low-fidelity wireframes to establish the information architecture and user flows. Developed a comprehensive style guide ensuring WCAG compliance for accessibility. Created a reusable component library in Adobe XD for consistent design implementation.',
    impact: 'The design provides an accessible, visually appealing booking experience across desktop, tablet, and mobile devices.'
  },
  {
    id: 'fitness-tracker-dashboard',
    title: 'Fitness Tracker Dashboard Concept',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
    description: 'Designed data-rich dashboard with focus on information hierarchy and scannable layouts.',
    highlights: [
      'Created user personas to guide design decisions',
      'Implemented visual hierarchy for complex data presentation',
      'Designed intuitive navigation for multi-level information'
    ],
    tags: ['Dashboard Design', 'Data Visualization', 'User Research', 'Figma'],
    challenge: 'Presenting complex fitness data in a way that is both comprehensive and easy to understand at a glance.',
    solution: 'Conducted user research to create personas and understand user needs. Implemented clear visual hierarchy to make data scannable. Used data visualization best practices to present metrics in an intuitive way. Designed multi-level navigation to organize different types of information.',
    impact: 'The dashboard concept effectively balances data density with usability, making it easy for users to track their fitness progress.'
  }
];

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Content style={{ padding: '100px 24px', textAlign: 'center' }}>
          <Title level={2}>Project Not Found</Title>
          <Button type="primary" icon={<ArrowLeftOutlined />} onClick={() => router.push('/')}>
            Back to Home
          </Button>
        </Content>
      </Layout>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh', background: '#fff' }}>
      <Content style={{ padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Back Button */}
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() => router.push('/#projects')}
            style={{
              marginBottom: '32px',
              fontSize: '16px',
              height: '40px',
              padding: '0 16px'
            }}
          >
            Back to Projects
          </Button>

          {/* Project Header */}
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={14}>
              <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </Col>

            <Col xs={24} lg={10}>
              <div style={{
                padding: '6px 16px',
                background: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '20px',
                display: 'inline-block',
                marginBottom: '16px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#667eea',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                {project.year}
              </div>

              <Title level={1} style={{ fontSize: '42px', marginBottom: '24px' }}>
                {project.title}
              </Title>

              <Paragraph style={{ fontSize: '18px', lineHeight: 1.8, color: '#4b5563', marginBottom: '32px' }}>
                {project.description}
              </Paragraph>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} style={{
                    padding: '8px 18px',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.08) 100%)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#667eea',
                    border: '1px solid rgba(102, 126, 234, 0.15)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </Col>
          </Row>

          <Divider style={{ margin: '60px 0' }} />

          {/* Project Details */}
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <Title level={3} style={{ color: '#6366f1', marginBottom: '16px' }}>
                The Challenge
              </Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: 1.8, color: '#4b5563' }}>
                {project.challenge}
              </Paragraph>
            </Col>

            <Col xs={24} lg={12}>
              <Title level={3} style={{ color: '#6366f1', marginBottom: '16px' }}>
                The Solution
              </Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: 1.8, color: '#4b5563' }}>
                {project.solution}
              </Paragraph>
            </Col>
          </Row>

          <Divider style={{ margin: '60px 0' }} />

          {/* Key Features */}
          <div>
            <Title level={3} style={{ marginBottom: '24px' }}>
              Key Features & Highlights
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {project.highlights.map((highlight, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#667eea',
                    marginTop: '8px',
                    flexShrink: 0
                  }} />
                  <Text style={{ fontSize: '16px', color: '#4b5563', lineHeight: 1.6 }}>
                    {highlight}
                  </Text>
                </div>
              ))}
            </div>
          </div>

          <Divider style={{ margin: '60px 0' }} />

          {/* Impact */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.03) 100%)',
            padding: '40px',
            borderRadius: '16px',
            border: '1px solid rgba(102, 126, 234, 0.1)'
          }}>
            <Title level={3} style={{ marginBottom: '16px' }}>
              Impact
            </Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: 1.8, color: '#4b5563', marginBottom: 0 }}>
              {project.impact}
            </Paragraph>
          </div>

          
        </div>
      </Content>
    </Layout>
  );
}
