import React from 'react';

import { Button, Form, Input, Row, Col, Select, Space, Switch } from 'antd';

import MainCard from 'components/MainCard';
import { SwapLeftOutlined } from '@ant-design/icons';




const { TextArea } = Input;




const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};


// ==============================|| SAMPLE PAGE ||============================== //


const SamplePage = () => (
  <div style={{ display: 'grid', placeItems: 'center'}}>
<Row>
<Col>

<MainCard  style={{ width: '450px' }}>
  
   <SwapLeftOutlined/> <b>Penerimaan Asset</b>
   <br /><br />
   <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

    <Form.Item
      label="ID Asset"
      name="id"
      rules={[
        {
          required: true,
          message: 'Silakan scan QR Code atau masukkan ID asset secara manual !',
        },
      ]}
    >
      <Input placeholder="Lakukan scan QR Code" />
      </Form.Item>


    <Form.Item
      label="Nama Barang"
      name="nama_barang"
    >
      <Input placeholder="Otomatis" readOnly />
    </Form.Item>


    <Form.Item
      label="Bagian / Divisi"
      name="Bagian / Divisi"
      rules={[
        {
          required: false,
          message: 'Please input !',
        },
      ]}
    >
      <Select
    showSearch
    placeholder="Pilih Bagian / Divisi"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Multimedia',
        label: 'Multimedia',
      },
      {
        value: 'PID',
        label: 'PID',
      },
    
      {
        value: '',
        label: '-- Persediaan --',
      },
    ]}
  />
    </Form.Item>

    <Form.Item
      label="Pengguna"
      name="pengguna"
      rules={[
        {
          required: false,
          message: 'Please input !',
        },
      ]}
    >
      <Select
    showSearch
    placeholder="Otomatis"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Arfian',
        label: 'Arfian',
      },
      {
        value: 'Yudi',
        label: 'Yudi',
      },
      {
        value: 'Rivan',
        label: 'Rivan',
      },
      {
        value: 'Doni',
        label: 'Doni',
      },
      {
        value: 'Salman',
        label: 'Salman',
      },
      {
        value: 'Said',
        label: 'Said',
      },
      {
        value: '',
        label: '-- Persediaan --',
      },
    ]}
  readOnly />
    </Form.Item>
    <Form.Item
      label="Kondisi"
      name="kondisi"
      rules={[
        {
          required: false,
          message: 'Please input !',
        },
      ]}
    >
      <Space>
    <Switch
          checkedChildren="Normal"
          unCheckedChildren="Rusak"
          defaultChecked />
      <Switch
          checkedChildren="Mulus"
          unCheckedChildren="Ada cacat"
          defaultChecked />
      </Space>    

</Form.Item>

    <Form.Item
      label="Catatan"
      name="catatan"
      rules={[
        {
          required: false,
          message: 'Please input !',
        },
      ]}
    >
      <TextArea placeholder="" />
    </Form.Item>

  

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >

    
      <Space>
      <Button htmlType="submit">
        Simpan & Tambah 
      </Button>
      <Button type="primary" htmlType="submit">
        Ok
      </Button>
      </Space>
     

    </Form.Item>
  </Form>

 
   
  </MainCard>
  
  </Col>
  </Row>
  </div>
 
);

export default SamplePage;
