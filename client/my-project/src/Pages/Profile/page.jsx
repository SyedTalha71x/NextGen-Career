/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  UserOutlined,
  DownloadOutlined,
  ShareAltOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Modal, Form, Input, Upload, Button, Row, Col, Spin, message } from "antd"; 
import axios from "axios";
import { useStateManage } from "../../Context/StateContext";
import { Token } from "@mui/icons-material";
import moment from "moment";

const Page = () => {
  const { API_URL } = useStateManage();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();


  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/show-profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.data.results);
        form.setFieldsValue({
          fullName: response.data.data.results[0].full_name,
          profilePicture: response.data.data.results[0].profile_picture,
          dob: moment(response.data.data.results[0].date_of_birth).format("YYYY-MM-DD"), 
          position: response.data.data.results[0].position,
          bio: response.data.data.results[0].summary,
          city: response.data.data.results[0].city,
          country: response.data.data.results[0].country,
          language:  response.data.data.results[0].language,
        });

      } catch (error) {
        console.log("Failed to catch the profile", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleEditClick = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = async () => {
    try{
      const token = localStorage.getItem('authToken');
      const values = form.getFieldsValue();

      const response = await axios.post(`${API_URL}/update-profile`, {
        full_name: values.fullName,
        date_of_birth: values.dob,
        position: values.position,
        summary: values.bio,
        city: values.city,
        country: values.country,
        profile_picture: values.profilePicture,
        language: values.language
      }, {
        headers: {
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`
        }
      })
      message.success('Your Profile has been updated Successfully')
      setIsModalVisible(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);

    }
    catch(error){
      console.log("Error while editing the details",error);
      message.error('Failed to update your profile, please check!') 
    }
  };



  return (
    <div className="cursor-pointer overflow-hidden w-full lg:p-3 md:p-3 sm:p-0 p-0">
      <div className="flex gap-1 items-center">
        <span className="text-2xl text-green-600">
          <UserOutlined />
        </span>
        <h1 className="text-xl font-extrabold text-gray-100">User Profile</h1>
      </div>
      
      {loading ? (
        <div className="flex justify-start items-center h-full">
          <Spin size="large" />
        </div>
      ) : (
        <>
          {data.length > 0 ? (
            data.map((item) => (
              <div className="user_profile mt-5" key={item.id}>
                <div className="bg-[#1f1f28] p-5 text-white h-full w-full rounded-xl">
                  <div className="flex lg:flex-row md:flex-row flex-col sm:flex-col lg:items-center md:items-center sm:items-start items-start gap-4 w-full">
                    <div>
                      <img
                        className="h-24 w-24 rounded-lg object-cover"
                        src={
                          item.profile_picture ||
                          "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                        }
                        alt="User Avatar"
                      />
                    </div>
                    <div className="flex-1 w-full">
                      <div className="">
                        <h1 className="text-xl text-white font-bold">
                          {item.full_name}
                        </h1>
                        <div className="flex flex-wrap gap-2 items-center text-blue-500 text-sm mt-1">
                          <span>{item.email}</span>
                          <span>{item.phone}</span>
                          <span>{item.website}</span>
                        </div>
                        <div className="mt-1 text-gray-400 text-sm lg:w-3/5 w-full">
                          <p>{item.summary}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="description_detail mt-10 w-full">
                    <h1 className="text-xl font-bold text-gray-100">Description</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 w-full">
                      <div className="w-full">
                        <p className="border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2">
                          <span className="text-white text-sm">Full Name :</span>{" "}
                          {item.full_name}
                        </p>
                        <p className="border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2">
                          <span className="text-white text-sm">Date of Birth :</span>{" "}
                          {new Date(item.date_of_birth).toLocaleDateString()}
                        </p>
                        <p className="border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2">
                          <span className="text-white text-sm">Position :</span>{" "}
                          {item.position}
                        </p>
                      </div>
                      <div className="w-full">
                        <p className="border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2">
                          <span className="text-white text-sm">Languages :</span>{" "}
                          {item.language}
                        </p>
                        <p className="border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2">
                          <span className="text-white text-sm">Country :</span>{" "}
                          {item.country}
                        </p>
                        <p className="border-b border-blue-500 pb-2 p-1 text-gray-400 text-sm mb-2">
                          <span className="text-white text-sm">City :</span>{" "}
                          {item.city}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-end items-center gap-2 mt-10 w-full">
                    <button className="flex items-center justify-center py-2 px-8 text-sm text-white bg-purple-900 rounded-lg">
                      <DownloadOutlined className="mr-2" /> Download Resume
                    </button>
                    <button className="flex items-center justify-center py-2 px-8 text-sm text-white bg-yellow-600 rounded-lg">
                      <ShareAltOutlined className="mr-2" /> Share Profile
                    </button>
                    <button
                      className="flex items-center justify-center py-2 px-8 text-sm text-white bg-slate-500 rounded-lg"
                      onClick={handleEditClick}
                    >
                      <EditOutlined className="mr-2" /> Edit
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white text-lg">No Data Found</div>
          )}
        </>
      )}

      <Modal
        title="Edit User Profile"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Update"
        cancelText="Cancel"
        okButtonProps={{
          className: "bg-purple-600 text-white",
        }}
      >
        <Form form={form} layout="vertical" className="mt-4">
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Full Name" name="fullName">
                <Input placeholder="Enter your full name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="City" name="city">
                <Input placeholder="Enter your city" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Country" name="country">
                <Input placeholder="Enter your Country" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Date of Birth" name="dob">
                <Input placeholder="Enter your date of birth" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Position" name="position">
                <Input placeholder="Enter your position" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Upload Picture" name="picture">
                <Upload beforeUpload={() => false} showUploadList={false}>
                  <Button>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Language" name="language">
                <Input placeholder="Enter your Language" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Bio" name="bio">
            <Input.TextArea placeholder="Enter a brief bio" rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Page;
