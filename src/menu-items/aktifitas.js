// assets
import { OrderedListOutlined } from '@ant-design/icons';
import { FieldTimeOutlined } from '@ant-design/icons';
import { UsergroupDeleteOutlined } from '@ant-design/icons';
import { QrcodeOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { SwapRightOutlined } from '@ant-design/icons';
import { SwapLeftOutlined } from '@ant-design/icons';




// icons
const icons = {
  OrderedListOutlined,
  FieldTimeOutlined,
  UsergroupDeleteOutlined,
  QrcodeOutlined,
  PlusOutlined,
  SwapRightOutlined,
  SwapLeftOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //


const aktifitas = {   
  id: 'group-dashboard',
  title: 'Aktifitas',
  type: 'group',
  children: [
    {
      id: 'cek-asset',
      title: 'Scan Asset',
      type: 'item',
      url: '/scan-asset',
      icon: icons.QrcodeOutlined,
      breadcrumbs: false
    },
    {
      id: 'tambah-asset',
      title: 'Tambah Asset',
      type: 'item',
      url: '/tambah-asset',
      icon: icons.PlusOutlined,
      breadcrumbs: false
    },
    {
      id: 'penyerahan',
      title: 'Penyerahan',
      type: 'item',
      url: '/penyerahan',
      icon: icons.SwapRightOutlined,
      breadcrumbs: false
    },
    {
      id: 'penerimaan',
      title: 'Penerimaan',
      type: 'item',
      url: '/penerimaan',
      icon: icons.SwapLeftOutlined,
      breadcrumbs: false
    },
   
  
  ]
};

export default aktifitas;
