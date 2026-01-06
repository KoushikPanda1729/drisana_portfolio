'use client';

import { Layout, Menu, Button, Row, Col, Card, Typography, Tag, Progress, Form, Input, message, FloatButton, Divider, Drawer, Popover } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  ProjectOutlined,
  ToolOutlined,
  BookOutlined,
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  BehanceOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  ArrowUpOutlined,
  CheckCircleOutlined,
  TrophyOutlined,
  MenuOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import Image from 'next/image';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

export default function Home() {
  const [form] = Form.useForm();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    { key: 'home', icon: <HomeOutlined />, label: 'Home', href: '#home' },
    { key: 'about', icon: <UserOutlined />, label: 'About', href: '#about' },
    { key: 'projects', icon: <ProjectOutlined />, label: 'Projects', href: '#projects' },
    { key: 'skills', icon: <ToolOutlined />, label: 'Skills', href: '#skills' },
    { key: 'education', icon: <BookOutlined />, label: 'Education', href: '#education' },
    { key: 'contact', icon: <MailOutlined />, label: 'Contact', href: '#contact' },
  ];

  const handleMenuClick = (e: { key: string }) => {
    const href = menuItems.find(item => item.key === e.key)?.href;
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      setDrawerVisible(false);
    }
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const onFinish = () => {
    message.success('Thank you! Your message has been sent successfully.');
    form.resetFields();
  };

  const projects = [
    {
      title: 'E-Commerce Mobile App Redesign',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      description: 'Redesigned e-commerce mobile interface with focus on streamlined navigation, reducing checkout steps from 5 to 3.',
      highlights: [
        'Developed high-fidelity interactive prototypes in Figma spanning 15+ screens',
        'Created cohesive design system with reusable components',
        'Implemented micro-interactions for enhanced user experience'
      ],
      tags: ['Figma', 'Mobile Design', 'E-Commerce', 'UX Research']
    },
    {
      title: 'Restaurant Booking Website UI',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      description: 'Designed fully responsive website from low-fidelity wireframes to polished high-fidelity mockups.',
      highlights: [
        'Established comprehensive style guide including typography and color palette',
        'Applied WCAG-compliant color contrast ratios for accessibility',
        'Created component library for design consistency'
      ],
      tags: ['Responsive Design', 'Accessibility', 'Web Design', 'Adobe XD']
    },
    {
      title: 'Fitness Tracker Dashboard Concept',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
      description: 'Designed data-rich dashboard with focus on information hierarchy and scannable layouts.',
      highlights: [
        'Created user personas to guide design decisions',
        'Implemented visual hierarchy for complex data presentation',
        'Designed intuitive navigation for multi-level information'
      ],
      tags: ['Dashboard Design', 'Data Visualization', 'User Research', 'Figma']
    }
  ];

  const skills = {
    design: [
      { name: 'Figma', level: 95 },
      { name: 'Adobe XD', level: 90 },
      { name: 'Wireframing & Prototyping', level: 92 },
      { name: 'User Research', level: 85 },
      { name: 'Design Systems', level: 88 },
      { name: 'Responsive Design', level: 90 }
    ],
    principles: [
      { name: 'Typography', level: 90 },
      { name: 'Color Theory', level: 88 },
      { name: 'Visual Hierarchy', level: 92 },
      { name: 'Grid Systems', level: 85 },
      { name: 'Accessibility (WCAG)', level: 82 }
    ],
    technical: [
      { name: 'HTML/CSS', level: 75 },
      { name: 'Photoshop', level: 70 },
      { name: 'Canva', level: 85 }
    ]
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          padding: '0 20px'
        }}
      >
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: '20px' }} />}
          onClick={showDrawer}
          style={{
            marginRight: '16px',
            display: 'none'
          }}
          className="mobile-menu-button"
        />
        <div style={{ fontWeight: 700, fontSize: '20px', marginRight: '50px', color: '#6366f1' }}>
          Drisana Dasgupta
        </div>
        <Menu
          mode="horizontal"
          items={menuItems}
          onClick={handleMenuClick}
          style={{ flex: 1, minWidth: 0, border: 'none' }}
          className="desktop-menu"
        />
      </Header>

      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
        styles={{ body: { padding: 0 } }}
        style={{ width: '280px' }}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          onClick={handleMenuClick}
          style={{ border: 'none' }}
        />
      </Drawer>

      <Content>
        {/* Hero Section */}
        <section id="home" className="gradient-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={14}>
                <div style={{ color: 'white' }}>
                  <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', fontWeight: 500 }}>
                    Hello, I&apos;m
                  </Text>
                  <Title level={1} style={{ color: 'white', fontSize: '56px', marginTop: '10px', marginBottom: '20px', fontWeight: 700 }}>
                    Drisana Dasgupta
                  </Title>
                  <Title level={2} style={{ color: 'rgba(255,255,255,0.95)', fontSize: '32px', fontWeight: 400, marginTop: 0 }}>
                    UI/UX Designer
                  </Title>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', marginTop: '30px', lineHeight: 1.8, maxWidth: '600px' }}>
                    Creative UI/UX Designer passionate about crafting intuitive, user-centered digital experiences.
                    Proficient in wireframing and prototyping using Figma and Adobe XD.
                  </Paragraph>
                  <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button
                      type="primary"
                      size="large"
                      icon={<MailOutlined />}
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      style={{ height: '50px', padding: '0 32px', fontSize: '16px', background: 'white', color: '#6366f1', border: 'none' }}
                    >
                      Get In Touch
                    </Button>
                    <Popover
                      content={
                        <div style={{ width: '400px', height: '500px', maxWidth: '90vw' }}>
                          <iframe
                            src="/cv.pdf#toolbar=0&navpanes=0&scrollbar=0"
                            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                            title="Resume Preview"
                          />
                        </div>
                      }
                      title={
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 600 }}>Resume Preview</span>
                          <Button
                            type="text"
                            icon={<DownloadOutlined style={{ fontSize: '18px' }} />}
                            href="/cv.pdf"
                            download="Drisana_Dasgupta_CV.pdf"
                            style={{ color: '#6366f1', display: 'flex', alignItems: 'center' }}
                          />
                        </div>
                      }
                      trigger="hover"
                      placement="bottom"
                    >
                      <Button
                        size="large"
                        icon={<DownloadOutlined />}
                        href="/cv.pdf"
                        download="Drisana_Dasgupta_CV.pdf"
                        style={{ height: '50px', padding: '0 32px', fontSize: '16px', background: 'rgba(255,255,255,0.2)', color: 'white', borderColor: 'white' }}
                      >
                        Download Resume
                      </Button>
                    </Popover>
                    <Button
                      size="large"
                      icon={<ProjectOutlined />}
                      onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                      style={{ height: '50px', padding: '0 32px', fontSize: '16px', background: 'transparent', color: 'white', borderColor: 'white' }}
                    >
                      View Projects
                    </Button>
                  </div>
                  <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
                    <Button type="text" size="large" icon={<BehanceOutlined style={{ fontSize: '24px' }} />} style={{ color: 'white' }} />
                    <Button type="text" size="large" icon={<LinkedinOutlined style={{ fontSize: '24px' }} />} style={{ color: 'white' }} />
                    <Button type="text" size="large" icon={<GithubOutlined style={{ fontSize: '24px' }} />} style={{ color: 'white' }} />
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={10}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '40px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  <div style={{ color: 'white', textAlign: 'center' }}>
                    <EnvironmentOutlined style={{ fontSize: '48px', marginBottom: '20px' }} />
                    <Title level={4} style={{ color: 'white', marginBottom: '10px' }}>Location</Title>
                    <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>Jalpaiguri, West Bengal</Text>
                  </div>
                  <Divider style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '30px 0' }} />
                  <div style={{ color: 'white', textAlign: 'center' }}>
                    <PhoneOutlined style={{ fontSize: '48px', marginBottom: '20px' }} />
                    <Title level={4} style={{ color: 'white', marginBottom: '10px' }}>Contact</Title>
                    <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px' }}>+91 89188 46865</Text>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding" style={{ background: '#f9fafb' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '50px', fontSize: '42px' }}>
              About Me
            </Title>
            <Row gutter={[48, 48]}>
              <Col xs={24} lg={12}>
                <Card style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                  <Title level={3} style={{ color: '#6366f1' }}>Professional Summary</Title>
                  <Paragraph style={{ fontSize: '16px', lineHeight: 1.8, color: '#4b5563' }}>
                    Creative UI/UX Designer passionate about crafting intuitive, user-centered digital experiences.
                    Proficient in wireframing and prototyping using Figma and Adobe XD. Strong foundation in typography,
                    color theory, and responsive design.
                  </Paragraph>
                  <Paragraph style={{ fontSize: '16px', lineHeight: 1.8, color: '#4b5563' }}>
                    Eager to contribute fresh perspectives within a collaborative team and continuously learning new
                    design methodologies and tools to stay at the forefront of the industry.
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                  <Title level={3} style={{ color: '#6366f1' }}>Key Strengths</Title>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <CheckCircleOutlined style={{ color: '#10b981', fontSize: '20px', marginRight: '12px' }} />
                      <Text style={{ fontSize: '16px' }}>Creative problem-solving with strong attention to detail</Text>
                    </div>
                    <div>
                      <CheckCircleOutlined style={{ color: '#10b981', fontSize: '20px', marginRight: '12px' }} />
                      <Text style={{ fontSize: '16px' }}>Quick learner adaptable to new tools and methodologies</Text>
                    </div>
                    <div>
                      <CheckCircleOutlined style={{ color: '#10b981', fontSize: '20px', marginRight: '12px' }} />
                      <Text style={{ fontSize: '16px' }}>Proficient in MS Office Suite and Google Workspace</Text>
                    </div>
                    <div>
                      <CheckCircleOutlined style={{ color: '#10b981', fontSize: '20px', marginRight: '12px' }} />
                      <Text style={{ fontSize: '16px' }}>Multilingual: Bengali, Hindi, and English</Text>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding">
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '20px', fontSize: '42px' }}>
              Featured Projects
            </Title>
            <Paragraph style={{ textAlign: 'center', fontSize: '18px', color: '#6b7280', marginBottom: '60px' }}>
              Showcasing my latest UI/UX design work
            </Paragraph>
            <Row gutter={[32, 32]}>
              {projects.map((project, index) => (
                <Col xs={24} lg={8} key={index}>
                  <Card
                    hoverable
                    style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '12px', overflow: 'hidden' }}
                    cover={
                      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                        />
                      </div>
                    }
                  >
                    <Tag color="purple" style={{ marginBottom: '12px' }}>{project.year}</Tag>
                    <Title level={4} style={{ marginBottom: '12px' }}>{project.title}</Title>
                    <Paragraph style={{ color: '#6b7280', marginBottom: '16px' }}>
                      {project.description}
                    </Paragraph>
                    <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} style={{ marginBottom: '8px', color: '#4b5563', fontSize: '14px' }}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.tags.map((tag, idx) => (
                        <Tag key={idx} color="blue">{tag}</Tag>
                      ))}
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding" style={{ background: '#f9fafb' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '20px', fontSize: '42px' }}>
              Core Competencies
            </Title>
            <Paragraph style={{ textAlign: 'center', fontSize: '18px', color: '#6b7280', marginBottom: '60px' }}>
              Tools, principles, and skills I use to create exceptional designs
            </Paragraph>
            <Row gutter={[32, 32]}>
              <Col xs={24} lg={8}>
                <Card
                  title={<span><ToolOutlined style={{ marginRight: '8px' }} />Design Tools</span>}
                  style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                >
                  {skills.design.map((skill, index) => (
                    <div key={index} style={{ marginBottom: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <Text strong>{skill.name}</Text>
                        <Text type="secondary">{skill.level}%</Text>
                      </div>
                      <Progress percent={skill.level} strokeColor="#6366f1" showInfo={false} />
                    </div>
                  ))}
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={<span><BookOutlined style={{ marginRight: '8px' }} />Design Principles</span>}
                  style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                >
                  {skills.principles.map((skill, index) => (
                    <div key={index} style={{ marginBottom: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <Text strong>{skill.name}</Text>
                        <Text type="secondary">{skill.level}%</Text>
                      </div>
                      <Progress percent={skill.level} strokeColor="#8b5cf6" showInfo={false} />
                    </div>
                  ))}
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card
                  title={<span><ToolOutlined style={{ marginRight: '8px' }} />Technical Skills</span>}
                  style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                >
                  {skills.technical.map((skill, index) => (
                    <div key={index} style={{ marginBottom: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <Text strong>{skill.name}</Text>
                        <Text type="secondary">{skill.level}%</Text>
                      </div>
                      <Progress percent={skill.level} strokeColor="#ec4899" showInfo={false} />
                    </div>
                  ))}
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="section-padding">
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '60px', fontSize: '42px' }}>
              Education & Certifications
            </Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} lg={12}>
                <Card
                  style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                >
                  <BookOutlined style={{ fontSize: '48px', color: '#6366f1', marginBottom: '20px' }} />
                  <Title level={3}>Bachelor of Arts (B.A)</Title>
                  <Text style={{ fontSize: '16px', color: '#6b7280', display: 'block', marginBottom: '8px' }}>
                    A.C College, Jalpaiguri
                  </Text>
                  <Text style={{ fontSize: '16px', color: '#6b7280', display: 'block', marginBottom: '8px' }}>
                    University of North Bengal (NBU)
                  </Text>
                  <Tag color="blue" style={{ marginTop: '12px' }}>2021 - 2024</Tag>
                  <Tag color="green">62.66%</Tag>
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card
                  style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                >
                  <TrophyOutlined style={{ fontSize: '48px', color: '#6366f1', marginBottom: '20px' }} />
                  <Title level={3}>Certifications & Training</Title>
                  <div style={{ marginTop: '20px' }}>
                    <div style={{ marginBottom: '20px' }}>
                      <CheckCircleOutlined style={{ color: '#10b981', marginRight: '8px' }} />
                      <Text strong>UI/UX Design Self-Learning</Text>
                      <br />
                      <Text type="secondary" style={{ marginLeft: '24px' }}>
                        Ongoing via online platforms, design communities (Dribbble, Behance), and YouTube
                      </Text>
                    </div>
                    <div>
                      <CheckCircleOutlined style={{ color: '#10b981', marginRight: '8px' }} />
                      <Text strong>Diploma in Financial Accounting (DFA)</Text>
                      <br />
                      <Text type="secondary" style={{ marginLeft: '24px' }}>
                        1 Year - Tally ERP 9 & Prime (GST billing, financial reporting)
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding" style={{ background: '#f9fafb' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '20px', fontSize: '42px' }}>
              Get In Touch
            </Title>
            <Paragraph style={{ textAlign: 'center', fontSize: '18px', color: '#6b7280', marginBottom: '60px' }}>
              Have a project in mind? Let&apos;s work together!
            </Paragraph>
            <Card style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input placeholder="Your Name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input placeholder="your.email@example.com" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label="Subject"
                  name="subject"
                  rules={[{ required: true, message: 'Please enter a subject' }]}
                >
                  <Input placeholder="Project Inquiry" />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea rows={6} placeholder="Tell me about your project..." />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" block icon={<MailOutlined />}>
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
              <Divider />
              <div style={{ textAlign: 'center' }}>
                <Title level={4}>Direct Contact</Title>
                <Paragraph>
                  <MailOutlined style={{ marginRight: '8px' }} />
                  <a href="mailto:drisanadasgupta123789@gmail.com" style={{ color: '#6366f1' }}>
                    drisanadasgupta123789@gmail.com
                  </a>
                </Paragraph>
                <Paragraph>
                  <PhoneOutlined style={{ marginRight: '8px' }} />
                  <a href="tel:+918918846865" style={{ color: '#6366f1' }}>
                    +91 89188 46865
                  </a>
                </Paragraph>
              </div>
            </Card>
          </div>
        </section>
      </Content>

      <Footer style={{ textAlign: 'center', background: '#1f2937', color: 'white', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Title level={3} style={{ color: 'white' }}>Drisana Dasgupta</Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}>
            UI/UX Designer | Creating Beautiful & Functional Digital Experiences
          </Paragraph>
          <div style={{ margin: '30px 0', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Button type="text" size="large" icon={<BehanceOutlined style={{ fontSize: '24px' }} />} style={{ color: 'white' }} />
            <Button type="text" size="large" icon={<LinkedinOutlined style={{ fontSize: '24px' }} />} style={{ color: 'white' }} />
            <Button type="text" size="large" icon={<GithubOutlined style={{ fontSize: '24px' }} />} style={{ color: 'white' }} />
            <Button type="text" size="large" icon={<MailOutlined style={{ fontSize: '24px' }} />} style={{ color: 'white' }} />
          </div>
          <Divider style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
          <Text style={{ color: 'rgba(255,255,255,0.6)' }}>
            © 2024 Drisana Dasgupta. All rights reserved.
          </Text>
        </div>
      </Footer>

      <FloatButton.BackTop icon={<ArrowUpOutlined />} />
    </Layout>
  );
}
