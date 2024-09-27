/* eslint-disable no-unused-vars */
import React from 'react';
import { Space, Table, Tag, Progress } from 'antd';

const columns = [
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
    render: (text, record) => (
      <Space>
        <img src={record.logo} alt="logo" className="w-5 h-5 mr-2" />
        <a>{text}</a>
      </Space>
    ),
  },
  {
    title: 'Companies',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: 'Budget',
    dataIndex: 'budget',
    key: 'budget',
  },
  {
    title: 'Members',
    dataIndex: 'members',
    key: 'members',
  },
  {
    title: 'Completion',
    dataIndex: 'completion',
    key: 'completion',
    render: (percent) => <Progress percent={percent} />,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    project: 'Project Alpha',
    logo: 'hhttps://e7.pngegg.com/pngimages/760/624/png-clipart-google-logo-google-search-advertising-google-company-text-thumbnail.png', // Placeholder logo
    company: 'Company A',
    budget: '$10,000',
    members: '5',
    completion: 60,
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    project: 'Project Beta',
    logo: 'https://w7.pngwing.com/pngs/827/526/png-transparent-microsoft-windows-microsoft-outlook-microsoft-office-microsoft-logo-s-text-rectangle-triangle-thumbnail.png', // Placeholder logo
    company: 'Company B',
    budget: '$20,000',
    members: '3',
    completion: 80,
    tags: ['loser'],
  },
  {
    key: '3',
    project: 'Project Gamma',
    logo: 'https://w1.pngwing.com/pngs/93/667/png-transparent-dell-logo-organization-personal-computer-blue-text-line-circle-area.png', // Placeholder logo
    company: 'Company C',
    budget: '$15,000',
    members: '4',
    completion: 40,
    tags: ['cool', 'teacher'],
  },
];

const App = () => (
  <div className="bg-cover bg-no-repeat p-8" style={{ backgroundImage: "url('your-background-image-url.jpg')" }}>
    <h2 className="text-white text-center mb-6">Projects Done</h2>
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 'max-content' }} // Enables horizontal scrolling
      pagination={false} // Disable pagination for a cleaner look
      bordered
      rowClassName="bg-gray-800 text-white" // Semi-transparent background for table rows
    />
  </div>
);

export default App;
