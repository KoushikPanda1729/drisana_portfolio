'use client';

import { Layout, Menu, Button, Row, Col, Card, Typography, Tag, Progress, Form, Input, message, FloatButton, Divider, Drawer, Popover, Modal } from 'antd';
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
  TwitterOutlined,
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
import Link from 'next/link';

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
      id: 'e-commerce-mobile-app',
      title: 'E-Commerce Mobile App Redesign',
      year: '2024',
      image: '/project_image/cover_e-com.png',
      figmaLink: 'https://www.figma.com/design/QcXlNFtzFchHCBDyN3uhv0/Kutuku----eCommerce-Mobile-App-UI-Kit-Figma-High-Quality-Template--Community-?node-id=2-68&t=SwvEkCl0BI8rt3c5-0',
      description: 'Redesigned e-commerce mobile interface with focus on streamlined navigation, reducing checkout steps from 5 to 3.',
      highlights: [
        'Developed high-fidelity interactive prototypes in Figma spanning 15+ screens',
        'Created cohesive design system with reusable components',
        'Implemented micro-interactions for enhanced user experience'
      ],
      tags: ['Figma', 'Mobile Design', 'E-Commerce', 'UX Research']
    },
    {
      id: 'restaurant-booking-website',
      title: 'Restaurant Booking Website UI',
      year: '2024',
      image: '/project_image/cover_restaurant .jpg',
      figmaLink: 'https://www.figma.com/design/fGpvtRcKB1r3oonOCPHcRn/Table-Booking-Restaurant-Application--Web---Mobile---Admin-Panels---Community-?node-id=730-871&t=7PA7nW6QibTFrloQ-0',
      description: 'Designed fully responsive website from low-fidelity wireframes to polished high-fidelity mockups.',
      highlights: [
        'Established comprehensive style guide including typography and color palette',
        'Applied WCAG-compliant color contrast ratios for accessibility',
        'Created component library for design consistency'
      ],
      tags: ['Responsive Design', 'Accessibility', 'Web Design', 'Adobe XD']
    },
    {
      id: 'fitness-tracker-dashboard',
      title: 'Fitness Tracker Dashboard Concept',
      year: '2024',
      image: '/project_image/cover-fitness.png',
      figmaLink: 'https://www.figma.com/design/ZsqU0poarVR9jDqPIgrjiI/Fitness-Tracker-Dashboard--Community-?node-id=2-499&t=HMnmPNVVRzUOvNPC-0',
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
          justifyContent: 'space-between',
          background: '#fff',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          padding: '0 50px',
          height: '70px'
        }}
      >
        {/* Left Side - Hamburger (Mobile) + Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: '22px' }} />}
            onClick={showDrawer}
            style={{
              display: 'none',
              width: '40px',
              height: '40px',
              padding: 0
            }}
            className="mobile-menu-button"
          />

          <div className="nav-signature-wrapper" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '28px',
            color: '#1e3a8a'
          }}>
            <span className="bracket" style={{
              fontWeight: 400,
              fontSize: '24px',
              color: '#667eea',
              opacity: 0.7
            }}>&lt;</span>
            <span className="signature-font" style={{
              fontSize: '32px',
              letterSpacing: '0.5px',
              background: 'linear-gradient(135deg, #1e3a8a 0%, #667eea 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              paddingTop: '4px',
              whiteSpace: 'nowrap'
            }}>
              Drisana Dasgupta
            </span>
            <span className="bracket" style={{
              fontWeight: 400,
              fontSize: '24px',
              color: '#667eea',
              opacity: 0.7
            }}>/&gt;</span>
          </div>
        </div>

        {/* Right Side - Navigation */}
        <Menu
          mode="horizontal"
          items={menuItems}
          onClick={handleMenuClick}
          overflowedIndicator={null}
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: '15px',
            fontWeight: 500,
            flex: 1,
            justifyContent: 'flex-end'
          }}
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
        <section id="home" className="gradient-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 50px', position: 'relative', overflow: 'hidden' }}>
          {/* Animated Background Shapes */}
          <div style={{ position: 'absolute', top: '15%', left: '10%', width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', animation: 'float 6s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '150px', height: '150px', background: 'rgba(255,255,255,0.08)', borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%', animation: 'float 8s ease-in-out infinite reverse' }} />
          <div style={{ position: 'absolute', top: '50%', right: '5%', width: '80px', height: '80px', background: 'rgba(255,255,255,0.06)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', animation: 'float 7s ease-in-out infinite' }} />

          <div style={{ maxWidth: 1400, width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <Row gutter={[64, 48]} align="middle">
              {/* Left Column - Text Content */}
              <Col xs={24} lg={12}>
                <div style={{ maxWidth: '600px' }}>
                  {/* Hello Badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                    padding: '10px 24px',
                    borderRadius: '50px',
                    marginBottom: '32px',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}>
                    <span style={{ fontSize: '20px' }}>👋</span>
                    <Text style={{ color: 'white', fontSize: '16px', fontWeight: 600, letterSpacing: '1px' }}>
                      HELLO THERE
                    </Text>
                  </div>

                  {/* Name */}
                  <Title
                    level={1}
                    style={{
                      fontSize: 'clamp(36px, 5vw, 52px)',
                      marginTop: '0',
                      marginBottom: '20px',
                      fontWeight: 800,
                      lineHeight: 1.1,
                      letterSpacing: '-1.5px',
                      color: 'white',
                      textShadow: '0 2px 20px rgba(0,0,0,0.1)'
                    }}
                  >
                    I&apos;m Drisana Dasgupta
                  </Title>

                  {/* Role */}
                  <Title
                    level={2}
                    style={{
                      fontSize: 'clamp(20px, 2.5vw, 26px)',
                      marginTop: '0',
                      marginBottom: '20px',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.95)',
                      letterSpacing: '-0.5px'
                    }}
                  >
                    Creative UI/UX Designer
                  </Title>

                  {/* Description */}
                  <Paragraph style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    marginBottom: '32px',
                    fontWeight: 400
                  }}>
                    Crafting intuitive and beautiful digital experiences through user-centered design. Specialized in wireframing, prototyping, and bringing ideas to life.
                  </Paragraph>

                  {/* CTA Buttons */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
                    <Button
                      type="primary"
                      size="large"
                      href="mailto:drisanadasgupta123789@gmail.com"
                      className="btn-shine"
                      style={{
                        height: '48px',
                        padding: '0 32px',
                        fontSize: '15px',
                        fontWeight: 600,
                        background: 'white',
                        color: '#6366f1',
                        border: 'none',
                        borderRadius: '24px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                        flex: '1 1 auto',
                        minWidth: '180px'
                      }}
                    >
                      Let&apos;s Work Together
                    </Button>

                    <Button
                      size="large"
                      icon={<DownloadOutlined />}
                      href="/Drisana_Dasgupta_Resume.pdf"
                      download="Drisana_Dasgupta_Resume.pdf"
                      style={{
                        height: '48px',
                        padding: '0 32px',
                        fontSize: '15px',
                        fontWeight: 600,
                        background: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        border: '2px solid rgba(255,255,255,0.4)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)',
                        flex: '1 1 auto',
                        minWidth: '200px'
                      }}
                    >
                      Download Resume
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    marginBottom: '32px',
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.9)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <EnvironmentOutlined style={{ fontSize: '18px' }} />
                      <span>Jalpaiguri, Darjeeling, West Bengal, India</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <MailOutlined style={{ fontSize: '18px' }} />
                      <a href="mailto:drisanadasgupta123789@gmail.com" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>
                        drisanadasgupta123789@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Right Column - Photo Card */}
              <Col xs={24} lg={12}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative'
                }}>
                  {/* Decorative Elements */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '40px',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    zIndex: 0
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '20px',
                    width: '80px',
                    height: '80px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                    zIndex: 0
                  }} />

                  <div style={{
                    position: 'relative',
                    background: 'linear-gradient(145deg, #f5e6d3 0%, #ede0d0 100%)',
                    borderRadius: '24px',
                    padding: '16px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 8px 30px rgba(0,0,0,0.12)',
                    maxWidth: '360px',
                    width: '100%',
                    border: '2px solid rgba(255,255,255,0.5)',
                    transform: 'translateZ(0)',
                    zIndex: 1
                  }}>
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '3/4',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                    }}>
                      <Image
                        src="/designer-illustration.jpeg"
                        alt="Drisana Dasgupta"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                      />
                      {/* Subtle Gradient Overlay */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '120px',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 100%)',
                        pointerEvents: 'none'
                      }} />
                    </div>
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

            {/* Mobile Only Photo */}
            <div className="mobile-only-photo" style={{ justifyContent: 'center', marginBottom: '40px' }}>
              <div style={{
                position: 'relative',
                background: 'linear-gradient(145deg, #f5e6d3 0%, #ede0d0 100%)',
                borderRadius: '24px',
                padding: '16px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                maxWidth: '320px',
                width: '100%',
                border: '2px solid rgba(102, 126, 234, 0.2)'
              }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3/4',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                }}>
                  <Image
                    src="/designer-illustration.jpeg"
                    alt="Drisana Dasgupta"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

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
                  <Link href={`/project/${project.id}`} style={{ display: 'block', height: '100%' }}>
                    <Card
                      hoverable
                      style={{ height: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer' }}
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
                  </Link>
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
                  style={{
                    height: '100%',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    borderRadius: '12px',
                    border: '1px solid #f0f0f0'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <BookOutlined style={{ fontSize: '40px', color: '#6366f1', marginTop: '4px' }} />
                    <div style={{ flex: 1 }}>
                      <Title level={3} style={{ marginBottom: '12px', fontSize: '22px' }}>
                        Bachelor of Arts (B.A)
                      </Title>
                      <Text style={{ fontSize: '15px', color: '#4b5563', display: 'block', marginBottom: '4px' }}>
                        A.C College, Jalpaiguri
                      </Text>
                      <Text style={{ fontSize: '15px', color: '#6b7280', display: 'block', marginBottom: '16px' }}>
                        University of North Bengal (NBU)
                      </Text>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Tag color="blue" style={{ margin: 0, fontSize: '13px', padding: '4px 12px' }}>
                          2021 - 2024
                        </Tag>
                        <Tag color="green" style={{ margin: 0, fontSize: '13px', padding: '4px 12px' }}>
                          62.66%
                        </Tag>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card
                  style={{
                    height: '100%',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    borderRadius: '12px',
                    border: '1px solid #f0f0f0'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                    <TrophyOutlined style={{ fontSize: '40px', color: '#6366f1', marginTop: '4px' }} />
                    <Title level={3} style={{ marginBottom: 0, fontSize: '22px' }}>
                      Certifications & Training
                    </Title>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                        <CheckCircleOutlined style={{ color: '#10b981', fontSize: '16px', marginTop: '3px' }} />
                        <Text strong style={{ fontSize: '15px' }}>UI/UX Design Self-Learning</Text>
                      </div>
                      <Text style={{ fontSize: '14px', color: '#6b7280', display: 'block', marginLeft: '24px', lineHeight: '1.5' }}>
                        Ongoing via online platforms, design communities (Dribbble, Behance), and YouTube
                      </Text>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                        <CheckCircleOutlined style={{ color: '#10b981', fontSize: '16px', marginTop: '3px' }} />
                        <Text strong style={{ fontSize: '15px' }}>Diploma in Financial Accounting (DFA)</Text>
                      </div>
                      <Text style={{ fontSize: '14px', color: '#6b7280', display: 'block', marginLeft: '24px', lineHeight: '1.5' }}>
                        1 Year - Tally ERP 9 & Prime (GST billing, financial reporting)
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
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
            <Button
              type="text"
              size="large"
              icon={<LinkedinOutlined style={{ fontSize: '24px' }} />}
              href="https://www.linkedin.com/in/drisana-dasgupta-6b81a83a5/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white' }}
            />
            <Button
              type="text"
              size="large"
              icon={<MailOutlined style={{ fontSize: '24px' }} />}
              href="mailto:drisanadasgupta123789@gmail.com"
              style={{ color: 'white' }}
            />
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
