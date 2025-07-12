import os
import paramiko
from scp import SCPClient

# 配置信息（从环境变量获取）
INPUT_HOST = os.environ.get('TENCENT_CLOUD_HOST')
INPUT_PORT = int(os.environ.get('TENCENT_CLOUD_SSH_KEY', 22))
INPUT_USER = os.environ.get('TENCENT_CLOUD_HOST_USER')
PRIVATE_KEY_PATH = os.environ.get('TENCENT_CLOUD_SSH_KEY', '~/.ssh/id_rsa')
LOCAL_DIR = os.environ.get('LOCAL_DIR', './vuepress/.vuepress/dist/')  # 注意结尾的斜杠
REMOTE_DIR = os.environ.get('REMOTE_DIR', '/root/wangtao/font-end-project/fe-js-ts')

def create_ssh_client():
    """创建SSH客户端并使用公钥认证"""
    try:
        # 创建SSH对象
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        
        # 加载私钥
        private_key = paramiko.RSAKey.from_private_key_file(PRIVATE_KEY_PATH)
        
        # 连接服务器（禁用密码认证）
        print(f"🔗 尝试连接到 {INPUT_HOST}:{INPUT_PORT} 作为用户 {INPUT_USER}")
        ssh.connect(
            hostname=INPUT_HOST,
            port=INPUT_PORT,
            username=INPUT_USER,
            pkey=private_key,
            timeout=10,
            allow_agent=False,  # 禁用SSH代理
            look_for_keys=False,  # 不搜索其他密钥
            password=None  # 明确禁用密码
        )
        print("✅ SSH连接成功")
        return ssh
    except paramiko.AuthenticationException as e:
        print(f"🔴 认证失败: {str(e)}")
        print(f"🔍 检查: {PRIVATE_KEY_PATH} 是否存在且权限为600")
        raise
    except Exception as e:
        print(f"🔴 SSH连接失败: {str(e)}")
        raise

def scp_process():
    """执行SCP文件传输"""
    try:
        with create_ssh_client() as ssh:
            # 检查本地目录是否存在
            if not os.path.exists(LOCAL_DIR):
                raise FileNotFoundError(f"🔴 本地目录不存在: {LOCAL_DIR}")
            
            print(f"📦 准备上传 {LOCAL_DIR} 到 {REMOTE_DIR}")
            
            # 创建SCP客户端
            with SCPClient(ssh.get_transport()) as scp:
                # 递归上传目录内容
                scp.put(LOCAL_DIR, remote_path=REMOTE_DIR, recursive=True)
                print(f"✅ 文件已成功上传到 {REMOTE_DIR}")
                
    except Exception as e:
        print(f"🔴 SCP传输失败: {str(e)}")
        raise

if __name__ == "__main__":
    # 检查必要的环境变量
    required_vars = ['SSH_HOST', 'SSH_USER', 'SSH_PRIVATE_KEY_PATH']
    missing_vars = [var for var in required_vars if os.environ.get(var) is None]
    if missing_vars:
        print(f"🔴 缺少必要的环境变量: {', '.join(missing_vars)}")
        exit(1)
    
    scp_process()