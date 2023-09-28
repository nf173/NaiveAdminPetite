import { reactive } from "vue";
import { renderColumnsMode, renderColumnsModule, renderColumnsPing } from '@/utils';
import { GetDstServersList } from '@/api';

export function useDstServer() {
  const data = reactive([]);
  const columns = reactive([
    {
      title: '模式',
      key: 'mode',
      render: row => {
        return renderColumnsMode(row);
      }
    },
    {
      title: '房间名',
      key: 'name',
    },
    {
      title: '模组',
      key: 'module',
      align: 'center',
      render: row => {
        return renderColumnsModule(row);
      }
    },
    {
      title: '在线人数',
      key: 'online',
      align: 'center'
    },
    {
      title: '延迟',
      key: 'ping',
      align: 'center',
      render: row => {
        return renderColumnsPing(row);
      }
    },
  ]);
  
  
  /**
   * @method 初始化饥荒服务器列表数据
   * @param {Function} callback - 数据初始化后的回调
   */
  async function initDstServerList(callback) {
    await getDstServersList();
    
    if(callback) {
      callback();
    }
  }

  /**
   * @method 请求饥荒服务器列表数据
   * @param {*} 
   */
  async function getDstServersList() {
    await GetDstServersList().then(res => {
      // console.log(res);
      if(res.code === 200) {
        res.data.forEach(item => {
          data.push(item);
        });
      }
    });
  }

  return {
    columns,
    data,
    initDstServerList
  };
}